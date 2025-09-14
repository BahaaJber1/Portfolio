import { cn } from "@/lib/utils";

function Container({ children, className, ...restProps }) {
    return (
        <div
            className={cn("flex flex-col gap-5", className)}
            {...restProps}
        >
            {children}
        </div>
    );
}


export default Container;
