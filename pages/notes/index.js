import Box from '@material-ui/core/Box';

const Index = ({ data }) => {


  return (
    <div className=' bg-on-primary-light '>

      <div className=' '>
        {data.map(note => {
          return (
            <div key={note._id}>
              <div dir='rtl' className=' p-3 '  >
                <Box className='bg-on-primary-light  gap-2 grid-cols-1 grid-rows-3    shadow-xl'   >
                  <p className='underline font-bold px-3 py-2 rounded-md h-fit w-fit'>السؤال</p>
                  <p  className='mx-6'>{note.title}</p>
                  <p className='underline font-bold px-3 py-2 rounded-md w-fit h-fit text-green-700 '>الجواب</p>
                  <p className='mx-6 text-green-700 pb-3'>{note.descri}</p>
                </Box>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Index;
export const getServerSideProps = async ({ req }) => {
  const protocol = req.headers['x-forwarded-proto'] || 'http'
  const baseUrl = req ? `${protocol}://${req.headers.host}` : ''


  const res = await fetch(`${baseUrl}/api/notes/`);
  const data = await res.json();
  return {
    props: { data }
  }
}

