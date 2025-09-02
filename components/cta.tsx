import { motion } from "framer-motion";
import TextBlur from "@/components/ui/text-blur";
import AnimatedShinyText from "@/components/ui/shimmer-text";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function CTA() {
  return (
    <motion.div
      className="flex w-full max-w-2xl flex-col gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-center">
          <div className="flex w-fit items-center justify-center rounded-full bg-white/5 text-center">
            <AnimatedShinyText className="px-4 py-1">
              <span>Coming soon!</span>
            </AnimatedShinyText>
          </div>
        </div>
      </motion.div>

      <motion.img
        src="/IdeaZura.png"
        alt="logo"
        className="mx-auto h-24 w-24 rounded-full"
        variants={itemVariants}
      />

      <motion.div variants={itemVariants}>
        <TextBlur
          className="text-center text-3xl font-medium tracking-tighter sm:text-5xl"
          text="Never lose your ideas again."
        />
      </motion.div>

      <motion.div variants={itemVariants}>
        <TextBlur
          className="mx-auto max-w-[40rem] pt-1.5 text-center text-base text-zinc-300 sm:text-lg"
          text="An AI assistant that turns raw ideas into clear, publish‑ready action plans."
          duration={0.8}
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <TextBlur
          className="mx-auto max-w-[27rem] pt-1.5 text-center text-base text-zinc-300 sm:text-lg"
          text="Join the waitlist to get early access of the product and recieve updates on the progress!"
          duration={0.8}
        />
      </motion.div>
    </motion.div>
  );
}
