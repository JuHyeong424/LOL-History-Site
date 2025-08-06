type SearchProps = {
  setUserName: (value: string) => void;
  onClickHandle: () => void;
};

export default function Search({ setUserName, onClickHandle }: SearchProps) {
  return (
    <>
      <input onChange={(e) => setUserName(e.target.value)} />
      <button onClick={onClickHandle}>검색하기</button>
    </>
  );
}
