"use client";

import { TODO_FILTERS, type TodoFilter } from "@/lib/types";
import { SegmentedControl } from "@/components/segmented-control";

interface TodoFilterProps {
  value: TodoFilter;
  onChange: (filter: TodoFilter) => void;
}

export function TodoFilter({ value, onChange }: TodoFilterProps) {
  return (
    <SegmentedControl
      label="필터"
      options={TODO_FILTERS}
      value={value}
      onChange={onChange}
    />
  );
}
