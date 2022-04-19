type ILabel = {
  txt: string;
  link: string;
};

const labels: ILabel[] = [{
  txt: 'Matters 長什麼樣',
  link: 'https://matters.news/about',
}, {
  txt: '玩轉 Matters 實用指南',
  link: 'https://matters.news/guide',
}, {
  txt: '社區共建基地',
  link: 'https://matters.news/community',
}, {
  txt: '一鍵玩家',
  link: 'https://matters.news/migration',
}, {
  txt: '用戶協議',
  link: 'https://matters.news/tos',
}, {
  txt: '開放社區',
  link: 'https://github.com/thematters/developer-resource',
}, {
  txt: '下載應用',
  link: 'https://github.com/thematters/developer-resource',
}];

const PanelLabel = ({ label }: { label: ILabel }) => {
  return (
    <a href={label.link} className="mr-4 mb-4 text-gray-400 font-light text-xs whitespace-nowrap">{label.txt}</a>
  );
}

const RightPanel = () => {
  return (
    <div className="max-w-xs flex flex-row justify-start flex-wrap pt-20">
      {labels.map(label => <PanelLabel label={label} key={`${label.txt}-${label.link}`} />)}
    </div>
  );
}

export default RightPanel;