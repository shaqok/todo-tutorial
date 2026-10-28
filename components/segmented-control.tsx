"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface SegmentedOption<T extends string> {
  value: T;
  label: string;
  /** 라벨 앞에 붙는 장식(예: 카테고리 색상 점) */
  icon?: ReactNode;
}

interface SegmentedControlProps<T extends string> {
  /** 라디오 그룹의 접근성 이름 */
  label: string;
  options: SegmentedOption<T>[];
  value: T;
  onChange: (value: T) => void;
}

// 필터·정렬 선택에 쓰는 세그먼트 컨트롤. 선택 상태는 data-state로 노출한다.
export function SegmentedControl<T extends string>({
  label,
  options,
  value,
  onChange,
}: SegmentedControlProps<T>) {
  return (
    <div
      role="radiogroup"
      aria-label={label}
      className="inline-flex flex-wrap gap-0.5 rounded-lg bg-muted p-0.5"
    >
      {options.map((item) => {
        const selected = item.value === value;
        return (
          <Button
            key={item.value}
            type="button"
            size="sm"
            variant="ghost"
            role="radio"
            aria-checked={selected}
            data-state={selected ? "checked" : "unchecked"}
            onClick={() => onChange(item.value)}
            className={cn(
              "px-2.5",
              selected
                ? "bg-background text-foreground shadow-sm hover:bg-background dark:bg-input/60 dark:hover:bg-input/60"
                : "text-muted-foreground"
            )}
          >
            {item.icon}
            {item.label}
          </Button>
        );
      })}
    </div>
  );
}
