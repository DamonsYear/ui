"use client";
import Box from "@damons-ui/box";
import { Descriptions } from "../Descriptions";

export default function Page() {
  return (
    <Box>
      <Descriptions.Container layout="horizontal">
        <Descriptions.Item label="담당자 1" gridWidth={1}>
          황재영
        </Descriptions.Item>
        <Descriptions.Item label="담당자 2" gridWidth={2}>
          황재영
        </Descriptions.Item>
        <Descriptions.Item label="담당자 3" gridWidth={3}>
          황재영
        </Descriptions.Item>
        <Descriptions.Item label="담당자 4" gridWidth={4}>
          황재영
        </Descriptions.Item>
        <Descriptions.Item label="담당자 5" gridWidth={5}>
          황재영
        </Descriptions.Item>
        <Descriptions.Item label="담당자 6" gridWidth={6}>
          황재영
        </Descriptions.Item>
        <Descriptions.Item label="담당자 7" gridWidth={1222}>
          황재영
        </Descriptions.Item>
      </Descriptions.Container>
    </Box>
  );
}
