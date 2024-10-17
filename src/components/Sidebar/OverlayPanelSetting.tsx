import clsx from "clsx";
import Link from "next/link";
import settingOptions from "./settingOptions";

const OverlayPanelSetting = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: (value: boolean) => void;
}) => {
  return (
    <div
      className={clsx(
        { "translate-x-5 opacity-100 visible": show },
        { "-translate-x-0 opacity-0 invisible": !show },
        "absolute -right-60 bottom-3",
        "bg-scheme-1-foreground w-52 mx-6 rounded-sm",
        "text-scheme-1-background",
        "transition-all ease-in-out duration-150",
        "flex flex-col gap-4"
      )}
    >
      <ul className="divide-y divide-scheme-1-background">
        {settingOptions.map((option) => (
          <li className="py-2" key={option.label}>{SettingButton(setShow, option)}</li>
        ))}
      </ul>
    </div>
  );
};

export default OverlayPanelSetting;

function SettingButton(
  setShow: (value: boolean) => void,
  option:
    | { label: string; type: string; href: string; action?: undefined }
    | {
        label: string;
        type: string;
        action: () => Promise<undefined>;
        href?: undefined;
      }
) {
  if (option.type === "method") {
    return (
      <button
        className="w-fit px-6"
        onClick={() => {
          setShow(false);
          if (option.action) {
            option.action();
          }
        }}
      >
        {option.label}
      </button>
    );
  } else {
    return (
      <Link
        href={option.href ?? ''}
        className="w-fit px-6"
        onClick={() => setShow(false)}
      >
        {option.label}
      </Link>
    );
  }
}