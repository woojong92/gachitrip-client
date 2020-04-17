import styled from "@emotion/styled";


const ListItemsBox = styled.div`
    width: 100%;
    background-color: #fff;
    border: 1px solid #e1e1e1;
    margin-bottom: 2px;
    display: flex;
    flex-direction: column;
`;

const ListItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
`;

const ContentBox = styled.div`
    flex: 1;
    margin-right: 10px;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
`;

const Title = styled.div`
    margin-bottom: 5px;
`;

const Content = styled.div`
    color: #5c5c5c;
`;


const ListSubItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 5px;
    border-top: 1px solid #e1e1e1;
`;


const Image = styled.div`
    height: 80px;
    width: 80px;
    box-sizing: border-box;
    background-color: green;
    border-radius: 10px;
    border: 1px solid #e1e1e1;
`;

const TagsBox = styled.div`
    display: flex;
    padding: 5px 0;
    /* width: 100%; */
    flex-wrap : wrap;
    flex-grow: 0;
`;

const Tag = styled.a`
    color: #fff;
    font-weight: 200;
    background-color: #2e2e2e;
    border-radius: grey;
    border-radius: 15px;
    padding: 0 5px;
    margin-top: 3px;
    margin-right: 5px;
`;

const dumyTags = ["ggg", "aaa", "sss", "sss", "sss", "sss", "sss", "aaa", "aaa", "aaa", "aaa", "aaa"];


const ConutBox = styled.div`
    display: flex;
    flex-direction: row;
`;

const Votes = styled.div`
    color: #5c5c5c;
    padding: 0 5px;
`;

const Comments = styled.div`
    color: #5c5c5c;
    padding: 0 5px;
`;

const Viewers = styled.div`
color: #5c5c5c;
padding: 0 5px;
`;


const AuthorBox = styled.div``;




const dumyData = {
    title: "제목",
    content: "asdfasdfasdfasdfasdfasdfa",
}

function ListItem({ onClick }) {
    const tags = dumyTags;
    return (
        <ListItemsBox onClick={onClick}>

            <ListItemWrapper>
                <ContentBox>
                    <Title>{dumyData.title}</Title>
                    <Content>{dumyData.content}</Content>
                    <TagsBox>
                        {
                            tags && tags.map((tag, idx) => (
                                <Tag key={idx}>{tag}</Tag>
                            ))
                        }
                    </TagsBox>

                </ContentBox>

                <Image >image</Image>
            </ListItemWrapper>


            <ListSubItemWrapper >
                <ConutBox>
                    <Votes>vote: 0</Votes>
                    <Comments>comments: 0</Comments>
                    <Viewers>viewers: 0</Viewers>
                </ConutBox>
                <AuthorBox>우디</AuthorBox>
            </ListSubItemWrapper>

        </ListItemsBox >
    )
};



export default ListItem;