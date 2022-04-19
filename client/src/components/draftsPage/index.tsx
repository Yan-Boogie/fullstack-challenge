import SlateEditor from '../slateEditor';
import Header from './components';

const Drafts = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      <SlateEditor />
    </div>
  );
}

export default Drafts;