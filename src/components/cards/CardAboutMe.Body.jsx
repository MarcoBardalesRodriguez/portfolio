export const CardAboutMe = ({ aboutUser }) => {
    return (
        <p dangerouslySetInnerHTML={{ __html: aboutUser.description }} >
            </p>
    )
}
