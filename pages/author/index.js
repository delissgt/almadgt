import {PageHeader, Card, Divider, Timeline} from "antd";


function AuthorPage () {
  return (
      <>
        <Card bordered={false}>
          <PageHeader
              title={"About me"}
          />
          <Card.Grid hoverable={false} bordered={false} style={{ textAlign: 'center'}}>
            hi, I'm Delia
          </Card.Grid>
          <Card.Grid bordered={false}>
            my photo
          </Card.Grid>
          <Card.Grid hoverable={false} style={{ textAlign: 'center'}} bordered={false}>
            I'm Software Engineer
            I'm used to work in Linux, also I enjoy frontend development and  it's improvement
            through UX. Other relevant fields for me are Data Bases and Testing, I would like to develop
            myself on these fields.
          </Card.Grid>
        </Card>
        <Divider/>
        <Card bordered={false}>
          <PageHeader
              title={"My experience"}
          />
          <Timeline mode={'left'}>
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
            <Timeline.Item>
              Coworking on Kimetrics Company - Professional Practice
            </Timeline.Item>
            <Timeline.Item label={'Gamification applied on System for Learning POO with focus in usage for people with motricity disability - Thesis degree- 02/2020'}>
              - gfd <br/>
              -qq <br/>
              - dsd <br/>
            </Timeline.Item>
            <Timeline.Item label={'Bentel forntedn'}> description</Timeline.Item>

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