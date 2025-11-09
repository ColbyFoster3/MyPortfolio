import Image from 'next/image';

export default function Introduction() {
    return (
        <div key="introduction-container" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="hidden md:flex w-full mx-auto justify-center">
            <Image
                src="/images/profile-picture.jpeg"
                alt="Profile picture"
                className="rounded-full object-cover aspect-square w-full max-w-[300px] lg:max-w-[300px] h-auto"
                width="400"
                height="400"
                priority
            />
            </div>
            <div className="content-center">
            <h2 className="text-3xl font-bold">Hi, I'm Colby 👋</h2>
            <p className="mt-2 text-lg">
                I'm a Software Engineer dedicated on building full web experiences to meet client's dreams.
            </p>
            </div>
        </div>
    );
}