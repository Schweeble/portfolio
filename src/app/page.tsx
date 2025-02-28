"use client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { useMemo, useState } from "react";
import { AutoTerminal } from "@/components/lib/AutoTerminal";
import { UserTerminal } from "@/components/lib/UserTerminal";
import { TerminalScreen } from "@/components/lib/TerminalScreen";
import { Introduction } from "@/components/lib/Introduction";

type State = "loading" | "interactive";

function HomeScreen() {
  const [state, setState] = useState<State>("loading");

  const introduce = useMemo(
    () => (
      <AutoTerminal
        lines={[
          "Hello, world!",
          "Welcome to my website.",
          "I'm a software engineer.",
          "I love to build things.",
          "I'm currently working on a new project.",
          "I hope you enjoy your stay.",
        ]}
        onComplete={() => setState("interactive")}
      />
    ),
    []
  );

  return (
    <TerminalScreen>
      <Introduction />
      <div className="flex flex-col items-center justify-center h-full">
        {introduce}
      </div>
      <div className="flex flex-col items-center justify-center h-full">
        {state === "interactive" && <UserTerminal />}
      </div>
    </TerminalScreen>
  );
}

export default HomeScreen;
