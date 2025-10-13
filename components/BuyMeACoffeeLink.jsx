"use client";

export default function BuyMeACoffeeLink({
    slug = "higginssorina",
    text = "Buy me a coffee",
}) {
    return (
        <a
            href={`https://www.buymeacoffee.com/${slug}`}
            target='_blank'
            rel='noopener noreferrer'
            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 font-semibold shadow hover:shadow-md transition`}
            style={{ background: "#5F7FFF", color: "#fff" }}
        >
            <span>☕</span>
            <span>{text}</span>
        </a>
    );
}
