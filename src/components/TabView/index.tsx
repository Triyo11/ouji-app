"use client";

import { useState } from "react";
import clsx from "clsx";
import z from "zod";

const TabsProps = z.object({
  id: z.number(),
  label: z.string(),
  content: z.any(),
});

export type TabsProps = z.infer<typeof TabsProps>;

const TabView = ({ tabs }: { tabs: TabsProps[] }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full mx-0 my-auto">
      <div className="flex space-x-4 border-b">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(index)}
            className={clsx(
              "px-4 py-2 text-sm font-medium",
              activeTab === index
                ? "border-b-2 border-scheme-1-foreground"
                : "text-scheme-1-foreground"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-2 mt-4 border rounded-md">{tabs[activeTab].content}</div>
    </div>
  );
};

export default TabView;
