import {questions} from '@/lib/data'
import OnGame from '@/app/game/[id]/ongame';
const PageGame = ({ params }: { params: { id: string } }) => {
  const id = parseInt(params.id)
  const question = questions.find(q => q.id === id);
  if (!question) {
    return <div>Question not found</div>;
  }
    return(
        <div>
          <OnGame question={question}/>
        </div>
    )
}
export default PageGame;