import PageContainer from './PageContainer'

export default function Footer(){
  return (
    <footer className="border-t border-gray-900">
      <PageContainer className="py-6 text-sm text-muted flex items-center justify-between">
        <div>Emad Elmontaser — Software Developer</div>
        <div className="flex gap-4">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="mailto:emad@example.com">Email</a>
        </div>
      </PageContainer>
    </footer>
  )
}
