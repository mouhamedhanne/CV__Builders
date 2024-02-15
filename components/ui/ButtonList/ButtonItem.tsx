import { cn } from "@/lib/utils";
import { ChevronRight, Loader2 } from "lucide-react";
import {
  ButtonHTMLAttributes,
  ForwardRefExoticComponent,
  LegacyRef,
  ReactNode,
  forwardRef,
} from "react";

type ButtonItemProps = {
  value?: ReactNode;
  valueAsDescription?: boolean;
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonItem: ForwardRefExoticComponent<ButtonItemProps> = forwardRef(
  (
    {
      onClick: handleClick,
      disabled = false,
      isLoading = false,
      value,
      valueAsDescription = false,
      children,
      className,
      ...props
    },
    ref: LegacyRef<HTMLButtonElement> | undefined
  ) => {
    return (
      <button
        {...props}
        className={cn(
          "w-full border border-slate-300 py-2 px-4 first:rounded-t-md last:rounded-b-md [&:not(:first-child)]:-mt-[1px]",
          { "hover:bg-secondary hover:cursor-pointer": handleClick },
          className
        )}
        disabled={disabled || isLoading}
        ref={ref}
        onClick={handleClick}
        type="button"
      >
        <span className="flex flex-col gap-8 items-start justify-center font-medium">
          {children}
          {valueAsDescription && value ? (
            <span className="text-slate-500 font-normal">{value}</span>
          ) : null}
        </span>

        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin text-slate-500" />
        ) : (
          <span className="flex gap-2 text-slate-500 items-center">
            {!valueAsDescription && value ? <span>{value}</span> : null}
            {handleClick ? <ChevronRight size="16" /> : null}
          </span>
        )}
      </button>
    );
  }
);

export default ButtonItem;
