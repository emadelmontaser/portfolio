import PageContainer from './PageContainer'

export default function Footer(){
  return (
    <footer className="border-t border-gray-900">
      <PageContainer className="py-6 text-sm text-muted flex items-center justify-between">
        <div>Emad Elmontaser — Software Developer</div>
        <div className="flex gap-4">
          <a href="https://github.com/emadelmontaser" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/emadelmontaser/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:emadelmontaser1@gmail.com">Email</a>
        </div>
      </PageContainer>
    </footer>
  )
}
