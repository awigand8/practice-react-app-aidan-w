import ProfileCard from "./ProfileCard";

function ProfileContainer() {
    const profiles = [
        { name: "James Bradley", age: 22, bio: "Fisherman and dog enthusiast"},
        { name: "Sherry Berry", age: 26, bio: "Full-stack developer who loves running"},
        { name: "Mike Loop", age: 21, bio: "Up and coming rap artist"},
    ];
    
    return (
        <div className="profile-container">
            <h1>User Profiles</h1>
            <div>
                {profiles.map((profile, index) => (
                    <ProfileCard
                    key={index}
                    name={profile.name}
                    age={profile.age}
                    bio={profile.bio}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProfileContainer;