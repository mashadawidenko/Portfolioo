import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import imgEllipse4 from "../../assets/70dde8dd6a215c136e38b93832c110347357ed16.png";

interface ChatMessage {
  id: number;
  sender: "masha" | "you";
  text: string;
  showLabel?: boolean;
}

const messages: ChatMessage[] = [
  { id: 1, sender: "masha", text: "Hey! So glad to see you here! \ud83d\udc4b", showLabel: true },
  { id: 2, sender: "masha", text: "I'm Masha, UX/UI designer \u2014 I craft interfaces that actually work and feel good to use." },
  { id: 3, sender: "you", text: "Hi Masha! Can I see your work?" },
  { id: 4, sender: "masha", text: "Absolutely! Scroll down to check out my projects \u2014 from admin panels to mobile apps.", showLabel: true },
];

function TypingIndicator() {
  return (
    <div className="flex gap-1 items-center px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="size-2 rounded-full bg-[#999]"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative shrink-0 size-12 rounded-full overflow-hidden">
      <img alt="Masha" className="absolute block size-full object-cover" src={imgEllipse4} />
    </div>
  );
}

export function ChatSection() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [typingMessage, setTypingMessage] = useState<number | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const timers: NodeJS.Timeout[] = [];
    let totalDelay = 0;

    messages.forEach((msg) => {
      if (msg.sender === "masha") {
        // Show typing indicator
        timers.push(
          setTimeout(() => {
            setTypingMessage(msg.id);
          }, totalDelay)
        );
        totalDelay += 2500;

        // Replace with actual message
        timers.push(
          setTimeout(() => {
            setTypingMessage(null);
            setVisibleMessages((prev) => [...prev, msg.id]);
          }, totalDelay)
        );
        totalDelay += 600;
      } else {
        // User message appears instantly
        timers.push(
          setTimeout(() => {
            setVisibleMessages((prev) => [...prev, msg.id]);
          }, totalDelay)
        );
        totalDelay += 800;
      }
    });

    return () => timers.forEach(clearTimeout);
  }, [hasStarted]);

  return (
    <section ref={sectionRef} className="py-24 md:py-36">
      <div className="max-w-[593px] mx-auto px-6">
        <div className="flex flex-col gap-10 md:gap-12">
          {/* First grey messages group */}
          <div className="flex flex-col gap-5 items-start pl-0 md:pl-[68px]">
            {/* Message 1 */}
            <div className="flex flex-col gap-2 items-start">
              <AnimatePresence>
                {(visibleMessages.includes(1) || typingMessage === 1) && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <span className="font-['Instrument_Sans',sans-serif] text-[#828282] text-[12px] leading-[16px]">
                      Masha Dawidenko
                    </span>
                    <div className="bg-[#efefef] rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-[2px] px-4 py-3 mt-2 max-w-[385px]">
                      {typingMessage === 1 ? (
                        <TypingIndicator />
                      ) : (
                        <p className="font-['Instrument_Sans',sans-serif] text-black text-[16px] leading-[24px]">
                          {messages[0].text}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Message 2 with avatar */}
          <AnimatePresence>
            {(visibleMessages.includes(2) || typingMessage === 2) && (
              <motion.div
                className="flex gap-5 items-end"
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Avatar />
                <div className="bg-[#efefef] rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-[2px] px-4 py-3 max-w-[385px]">
                  {typingMessage === 2 ? (
                    <TypingIndicator />
                  ) : (
                    <p className="font-['Instrument_Sans',sans-serif] text-black text-[16px] leading-[24px]">
                      {messages[1].text}
                    </p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Green message (user) */}
          <AnimatePresence>
            {visibleMessages.includes(3) && (
              <motion.div
                className="flex flex-col gap-2 items-end"
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <span className="font-['Instrument_Sans',sans-serif] text-[#828282] text-[12px] leading-[16px]">
                  You
                </span>
                <div className="bg-[#8ecf25] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-[2px] px-4 py-3">
                  <p className="font-['Instrument_Sans',sans-serif] font-medium text-white text-[16px] leading-[24px] whitespace-nowrap">
                    {messages[2].text}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Final grey message with avatar */}
          <AnimatePresence>
            {(visibleMessages.includes(4) || typingMessage === 4) && (
              <motion.div
                className="flex gap-5 items-end"
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Avatar />
                <div className="flex flex-col gap-2">
                  <span className="font-['Instrument_Sans',sans-serif] text-[#828282] text-[12px] leading-[16px]">
                    Masha Dawidenko
                  </span>
                  <div className="bg-[#efefef] rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-[2px] px-4 py-3 max-w-[385px]">
                    {typingMessage === 4 ? (
                      <TypingIndicator />
                    ) : (
                      <p className="font-['Instrument_Sans',sans-serif] text-black text-[16px] leading-[24px]">
                        {messages[3].text}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
