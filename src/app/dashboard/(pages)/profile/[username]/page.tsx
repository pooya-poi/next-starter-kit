interface ProfilePageProps {
  params: Promise<{
    id: number;
    username: string;
  }>;
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { username } = await params;

  return (
    <div>
      <h1>Profile: {username}</h1>
    </div>
  );
}
