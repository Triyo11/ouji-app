import DirectButton from "../Button/DirectButton";

const UserActionButton = () => {
  return (
    <div className="grid grid-rows-1 grid-flow-col gap-8 items-center">
      <div className="grid grid-rows-1 grid-flow-col gap-1 items-center">
        <DirectButton url="/login" label="Sign in" />
        <DirectButton url="/" label="Sign up" />
      </div>
    </div>
  );
};

export default UserActionButton;
