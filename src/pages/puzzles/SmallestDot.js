export const SmallestDot = () => {
  const submit = () => {};
  return (
    <div>
      What is the smallest dot?
      <form onSubmit={submit}>
        <option value="1">.</option>
        <option value="1">.</option>
        <option value="1">.</option>
      </form>
    </div>
  );
};
