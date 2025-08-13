import { SearchButton, SearchNameInput, SearchWrapper } from '@/pages/user/styles/search.styles.ts';

type SearchProps = {
  setUserName: (value: string) => void;
  onClickHandle: () => void;
};

export default function Search({ setUserName, onClickHandle }: SearchProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClickHandle();
    }
  };

  return (
    <SearchWrapper>
      <SearchNameInput
        type="text"
        placeholder="소환사 이름을 입력하세요"
        onChange={(e) => setUserName(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <SearchButton onClick={onClickHandle}>검색하기</SearchButton>
    </SearchWrapper>
  );
}
