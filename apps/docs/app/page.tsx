"use client";
import Box from "@damons-ui/box";
import { Descriptions } from "../Descriptions";

export default function Page() {
  return (
    <Box>
      <Descriptions.Container layout="vertical">
        <Descriptions.Item
          label="담당자 1"
          labelHeight="40px"
          contentHeight="40px"
          unit={3}
        >
          황재영
        </Descriptions.Item>

        <Descriptions.Item
          label="담당자 2"
          labelHeight="40px"
          contentHeight="40px"
          unit={3}
        >
          황재영
        </Descriptions.Item>

        <Descriptions.Item
          label="담당자 3"
          labelHeight="40px"
          contentHeight="40px"
          unit={3}
        >
          황재영
        </Descriptions.Item>

        <Descriptions.Item
          label="담당자 4"
          labelHeight="40px"
          contentHeight="40px"
          unit={3}
        >
          황재영
        </Descriptions.Item>

        <Descriptions.Item
          label="담당자 5"
          labelHeight="40px"
          contentHeight="40px"
          unit={4}
        >
          황재영
        </Descriptions.Item>

        <Descriptions.Item
          label="담당자 6"
          labelHeight="40px"
          contentHeight="40px"
          unit={4}
        >
          황재영
        </Descriptions.Item>

        <Descriptions.Item
          label="담당자 7"
          labelHeight="40px"
          contentHeight="40px"
          unit={4}
        >
          황재영
        </Descriptions.Item>

        <Descriptions.Col unit={6}>
          <Descriptions.Item
            label="담당자 7"
            labelHeight="40px"
            contentHeight="40px"
            unit={6}
          >
            황재영
          </Descriptions.Item>

          <Descriptions.Item
            label="담당자 7"
            labelHeight="40px"
            contentHeight="40px"
            unit={6}
          >
            황재영
          </Descriptions.Item>

          <Descriptions.Item
            label="담당자 7"
            labelHeight="40px"
            contentHeight="40px"
            unit={6}
          >
            황재영
          </Descriptions.Item>
        </Descriptions.Col>

        <Descriptions.Col unit={6}>
          <Descriptions.Row unit={6}>
            <Descriptions.Item
              label="담당자 7"
              labelHeight="40px"
              contentHeight="40px"
              unit={3}
            >
              황재영22
            </Descriptions.Item>
            <Descriptions.Item
              label="담당자 7"
              labelHeight="40px"
              contentHeight="40px"
              unit={3}
            >
              황재영
            </Descriptions.Item>
          </Descriptions.Row>

          <Descriptions.Row unit={6}>
            <Descriptions.Item
              label="담당자 7"
              labelHeight="40px"
              contentHeight="40px"
              unit={3}
            >
              황재영
            </Descriptions.Item>
            <Descriptions.Item
              label="담당자 7"
              labelHeight="40px"
              contentHeight="40px"
              unit={3}
            >
              황재영
            </Descriptions.Item>
          </Descriptions.Row>

          <Descriptions.Row unit={6}>
            <Descriptions.Item
              label="담당자 7"
              labelHeight="40px"
              contentHeight="40px"
              unit={3}
            >
              황재영
            </Descriptions.Item>
            <Descriptions.Item
              label="담당자 7"
              labelHeight="40px"
              contentHeight="40px"
              unit={3}
            >
              황재영
            </Descriptions.Item>
          </Descriptions.Row>
        </Descriptions.Col>
      </Descriptions.Container>
    </Box>
  );
}
