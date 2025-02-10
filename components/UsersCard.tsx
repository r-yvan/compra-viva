import { NumberTicker } from "@/components/ui/number-ticker";

const UsersCard = () => {
  return (
    <div>
      <p>There are more than </p>
      <NumberTicker
        value={100}
        className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white"
      />
      <p>sellers using CompraViva world wide and making profit out of it.</p>
    </div>
  );
};

export default UsersCard;
