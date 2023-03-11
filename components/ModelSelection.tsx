"use client";
import useSWR from "swr";
import Select from "react-select";

const fetchModels = () => fetch("api/getEngines").then((res) => res.json());

function ModelSelection() {
  const { data: models, isLoading } = useSWR("models", fetchModels);
  return <div>ModelSelection</div>;
}

export default ModelSelection;
