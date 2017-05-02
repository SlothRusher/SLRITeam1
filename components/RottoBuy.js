import React, { Component } from 'react'
import {
  Image,
  Text
} from 'react-native'
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Form,
  Item,
  Input,
  Label,
  Button,
  Body,
  Icon
} from 'native-base'
import {Col, Row, Grid} from 'react-native-easy-grid';
export default class SLRITeam1 extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Grid>
            <Col>
              <Form>
                <Item stackedLabel>
                  <Label>เลขท้าย 2 ตัว</Label>
                  <Input/>
                </Item>
              </Form>
            </Col>
            <Col>
              <Form>
                <Item stackedLabel>
                  <Label>บน (บาท)</Label>
                  <Input/>
                </Item>
              </Form>
              <Form>
                <Item stackedLabel>
                  <Label>ล่าง (บาท)</Label>
                  <Input/>
                </Item>
              </Form>
            </Col>
          </Grid>
          <Grid>
            <Col>
              <Form>
                <Item stackedLabel>
                  <Label>เลขท้าย 3 ตัว</Label>
                  <Input/>
                </Item>
              </Form>
            </Col>
            <Col>
              <Form>
                <Item stackedLabel>
                  <Label>โต๊ด (บาท)</Label>
                  <Input/>
                </Item>
              </Form>
              <Form>
                <Item stackedLabel>
                  <Label>เต็ง (บาท)</Label>
                  <Input/>
                </Item>
              </Form>
            </Col>
          </Grid>
          <Form>
            <Item stackedLabel>
              <Label>จำนวนเงิน (บาท)</Label>
              <Input/>
            </Item>
          </Form>
        </Content>
        <Footer >
          <FooterTab>
            <Button full iconLeft success>
              <Icon name='cart'/>
              <Text>ซื้อหวย!</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
