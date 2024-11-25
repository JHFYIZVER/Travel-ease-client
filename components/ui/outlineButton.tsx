const OutlineButton = ({ text }: { text: string }) => {
  return (
    <button className="font-semibold border border-primary py-2 px-8 rounded-sm transition-all hover:bg-primary hover:text-white">
      {text}
    </button>
  );
};

export default OutlineButton;
