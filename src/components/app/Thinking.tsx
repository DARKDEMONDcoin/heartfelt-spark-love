import { Portrait } from "@/components/site/Portrait";
import { cn } from "@/lib/utils";

/**
 * مؤشر انتظار بسيط: ثلاث نقاط فقط.
 * لا استريمنج ولا مراحل متغيّرة ولا هياكل وهمية — الرد يظهر كاملاً مرة واحدة عند وصوله.
 */
export function Thinking({
  memberId,
  name,
  className,
}: {
  memberId: string;
  name: string;
  className?: string;
  /** محفوظة للتوافق مع مواضع الاستخدام — لا تؤثر على العرض. */
  request?: string;
  imageRequested?: boolean;
  attachments?: number;
}) {
  return (
    <div
      className={cn("flex justify-end gap-3 animate-bubble-in", className)}
      role="status"
      aria-live="polite"
      aria-label={`${name} يجهّز الرد`}
    >
      <span className="order-2 block size-9 shrink-0 overflow-hidden rounded-xl shadow-sm">
        <Portrait memberId={memberId} name={name} className="size-full" />
      </span>

      <div className="order-1 flex items-center gap-1.5 rounded-3xl rounded-se-lg border border-border bg-card px-4 py-3.5 shadow-sm">
        <span className="size-2 rounded-full bg-primary think-dot" aria-hidden />
        <span className="size-2 rounded-full bg-primary think-dot [animation-delay:0.18s]" aria-hidden />
        <span className="size-2 rounded-full bg-primary think-dot [animation-delay:0.36s]" aria-hidden />
      </div>
    </div>
  );
}
