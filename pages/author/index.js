import {PageHeader, Card, Divider, Timeline, Button} from "antd";
import {GithubOutlined, LinkedinOutlined, MailOutlined} from '@ant-design/icons';


function AuthorPage (props) {
  return (
      <>
        <PageHeader title={"About me"}/>
        <Card bordered={false}>
          <Card.Grid hoverable={false} bordered={false} style={{ textAlign: 'center'}}>
            hi, I&apos;m Delia
          </Card.Grid>
          <Card.Grid bordered={false}>
            <Card
                bordered={false}
                actions={[
                  <Button key='githug' shape={'circle'} icon={<GithubOutlined />}/>,
                  <Button key='linkedin' shape={'circle'} icon={<LinkedinOutlined />}/>,
                  <Button key='mail' shape={'circle'} icon={<MailOutlined />}/>
                ]}
            >
              my photo
            </Card>
          </Card.Grid>
          <Card.Grid hoverable={false} style={{ textAlign: 'center'}} bordered={false}>
            I&apos;m Software Engineer
            I&apos;m used to work in Linux, also I enjoy frontend development and  it&apos;s improvement
            through UX. Other relevant fields for me are Data Bases and Testing, I would like to develop
            myself on these fields.
            <br/>
            <br/>
            <Button type={'primary'} loading={false} >Download my CV</Button>
          </Card.Grid>
        </Card>
        {/*<Divider/>*/}
        <Card bordered={false}>
          <PageHeader
              title={"My experience"}
          />
          <Timeline mode={'left'}>
            <Timeline.Item label={'Coworking on Kimetrics Company - Professional Practice'}/>

            <Timeline.Item label={'Junior Developer -- Kimetrics Company - 11/2018'}>
              - Tested company mobile application and site for final clients <br/>
              - Develop feature login for security access in airflow technology <br/>
              - Documented internal operations <br/>
              - Logs rotation to AWS company buckets
            </Timeline.Item>
            <Timeline.Item label={'Junior Developer -- Avaluos Morsa - 11/2019'}>
              - Developed Qt application usgin python and Qml <br/>
              - Data Base design using SQLAlchemy <br/>
              - Backend Testing <br/>
              - Documentation for user usage
            </Timeline.Item>
            <Timeline.Item label={'Gamification applied on System for Learning POO with focus in usage for people with motricity disability - Thesis degree- 02/2020'}>
              - Creation of backed using Python and Flask <br/>
              - Design of Postgrest Data Base <br/>
              - Creation of Frontend  <br/>
            </Timeline.Item>
            <Timeline.Item label={'Bentel frontend'}> description</Timeline.Item>

          </Timeline>
        </Card>
        <Card>
          <PageHeader
              title={"Tecnologies I have used"}
          />

        </Card>
        <Card>
          <PageHeader
              title={'Achievements'}

          />
        </Card>
      </>
  )
}

export default AuthorPage;