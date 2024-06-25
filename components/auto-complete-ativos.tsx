import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { Empresa as Ativo } from "@prisma/client";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {useState} from "react";


interface AutoCompleteAtivosProps {
    suggestions: Ativo[];
    onSelection: (ativo: Ativo) => void;
}

export function AutoCompleteAtivos({suggestions, onSelection}: AutoCompleteAtivosProps) {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")
    const [ativos, setAtivos] = useState<Ativo[] | []>(suggestions)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? ativos.find((ativo) => ativo.ticker?.toLowerCase() === value.toLowerCase())?.ticker
                        : "Adicione um Ativo"}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Buscar Ativo..." className="h-9" />
                    <CommandList>
                        <CommandEmpty>Ativo não encontrado</CommandEmpty>
                        <CommandGroup>
                            {ativos.map((ativo) => (
                                <CommandItem
                                    key={ativo.codigo_cvm}
                                    value={ativo.ticker?.toLowerCase()}
                                    onSelect={() => {
                                        onSelection(ativo)
                                        setOpen(false)
                                    }}
                                >
                                    {ativo.ticker}
                                    <CheckIcon
                                        className={cn(
                                            "ml-auto h-4 w-4",
                                            value === ativo.ticker ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
