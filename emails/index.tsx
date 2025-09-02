import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  userFirstname: string;
}

// export const NotionWaitlistEmail = ({ userFirstname }: EmailProps) => (
//   <Html>
//     <Head />
//     <Preview>Thanks for Joining the Waitlist, {userFirstname}! 🎉</Preview>
//     <Body style={main}>
//       <Container style={container}>
//         <Img
//           src={`https://nextjs-notion-waitlist.vercel.app/waitlist-logo.png`}
//           width="220"
//           height="100"
//           alt="Notion Waitlist Logo"
//           style={logo}
//         />
//         <Text style={greeting}>Hi {userFirstname},</Text>
//         <Text style={paragraph}>
//           Thanks for joining the waitlist for our Next.js + Notion CMS waitlist
//           template! I'm Lakshay, the developer behind this project. I'm glad to
//           have you on board.
//         </Text>
//         <Text style={paragraph}>
//           I'll keep you posted on the progress and notify you as soon as it's
//           ready for you to use. In the meantime, if you have any questions or
//           feedback, don't hesitate to reach out by replying directly to{" "}
//           <a href="mailto:lakshb.work@gmail.com" style={link}>
//             this email {""}
//           </a>
//           — I'm here to listen!
//         </Text>
//         <Text style={paragraph}>
//           You can also follow me on X/Twitter for updates:{" "}
//           <a href="https://x.com/blakssh" style={link}>
//             @blakssh
//           </a>
//         </Text>
//         <Text style={signOff}>
//           Best regards,
//           <br />
//           Lakshay
//         </Text>
//         <Hr style={hr} />
//         <Text style={footer}>
//           You received this email because you signed up for the Notion waitlist.
//           If you believe this is a mistake, feel free to ignore this email.
//         </Text>
//       </Container>
//     </Body>
//   </Html>
// );
export const IdeazuraWaitlistEmail = ({
  userFirstname,
}: {
  userFirstname: string;
}) => (
  <Html>
    <Head />
    <Preview>Welcome to Ideazura, {userFirstname}! 🎉</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={greeting}>Hi {userFirstname},</Text>
        <Text style={paragraph}>
          Thanks for joining the waitlist for <strong>Ideazura</strong>! We're
          excited to help you capture ideas, turn them into actions, and stay on
          track with smart reminders.
        </Text>
        <Text style={paragraph}>
          You'll be among the first to get early access and receive updates as
          we make progress. If you have any questions or feedback, simply reply
          to this email — we’d love to hear from you.
        </Text>
        <Text style={signOff}>
          Best regards,
          <br />
          The Ideazura Team 💡
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          You received this email because you signed up for the Ideazura
          waitlist. If this was a mistake, you can safely ignore this message.
        </Text>
      </Container>
    </Body>
  </Html>
);

IdeazuraWaitlistEmail.PreviewProps = {
  userFirstname: "Tyler",
} as EmailProps;

export default IdeazuraWaitlistEmail;

const main = {
  background: "linear-gradient(135deg, #22d3ee 0%, #2dd4bf 100%)",
  fontFamily: 'figtree, "Helvetica Neue", Helvetica, Arial, sans-serif',
  padding: "40px 0",
  color: "#ffffff", // texte blanc pour lisibilité
};

const container = {
  margin: "0 auto",
  padding: "24px 32px 48px",
  backgroundColor: "#1a1a1a",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  maxWidth: "600px",
};

const logo = {
  margin: "0 auto",
  paddingBottom: "20px",
};

const greeting = {
  fontSize: "18px",
  lineHeight: "28px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "20px",
};

const link = {
  color: "#F7FF9B",
  textDecoration: "underline",
};

const signOff = {
  fontSize: "16px",
  lineHeight: "26px",
  marginTop: "20px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8c8c8c",
  fontSize: "12px",
};
