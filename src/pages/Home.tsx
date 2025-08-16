import NoteForm from "@/components/NoteForm"
import NoteList from "@/components/NoteList"
const Home = () => {
  return (
    <div className="flex items-center justify-center  px-4 py-8 mx-auto bg-gray-100 max-w-screen-sm w-full">
      <div className="w-full">
        <h1 className="text-3xl font-bold text-center mb-6">📝 NoteNest</h1>
        <div className="p-6 bg-white rounded shadow">
          <NoteForm />
        </div>
        <div>
          <NoteList />
        </div>
      </div>
    </div>
  )
}

export default Home