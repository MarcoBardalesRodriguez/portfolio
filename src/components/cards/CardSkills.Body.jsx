import { Stack, Figure } from "react-bootstrap"

export const CardSkills = ({ skills }) => {
    console.log(skills)
    //sorted skills by name
    skills.sort((a, b) => {
        if (a.name > b.name) {
            return 1
        }
        if (a.name < b.name) {
            return -1
        }
        return 0
    })
    return (
        <Stack gap={2} direction="horizontal" className="flex-wrap">
            {skills.map((skill) => {
                return (
                    <Figure className="bg-light p-2 text-center rounded shadow">
                        <Figure.Image
                            width={70}
                            height={70}
                            alt={skill.name}
                            src={skill.icon_svg_url}
                        />
                        <Figure.Caption>
                            <span>{skill.name}</span>
                        </Figure.Caption>
                    </Figure>
                )
            })}
        </Stack>
    )
}