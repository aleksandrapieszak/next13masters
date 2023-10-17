import Link from "next/link";

const navigation = {
    main: [
        { name: 'Policies', href: '/polityka-prywatnosci' },
        { name: 'Rules', href: '/regulamin' },
    ],
}

export default function Footer() {
    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                <nav className="-mb-6 columns-4 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
                    {navigation.main.map((item) => (
                        <div key={item.name} className="pb-6">
                            <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                                {item.name}
                            </Link>
                        </div>
                    ))}
                </nav>

                <p className="mt-10 text-center text-xs leading-5 text-gray-500">
                    &copy; 2023 Next 13 Masters, Inc. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
