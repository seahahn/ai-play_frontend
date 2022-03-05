export const CORS = "cors"; // CORS 설정

export const UPLOAD_ACCEPT = "application/vnd.ms-excel, text/csv"; // 데이터셋 업로드 시 파일 확장자 설정

export const MLFUNCS_URL = "http://localhost:8000/"; // ML-Funcs 서버 주소
export const MLFUNCS_SUFFIX_DF = "dataframe/"; // EDA, 전처리 기능 경로
export const MLFUNCS_SUFFIX_PLOT = "plot/"; // 시각화 기능 경로

export const MLTRAIN_URL = "http://localhost:8001/"; // ML-Train 서버 주소
export const MLTRAIN_SUFFIX_MODEL = "model/"; // 모델 학습 기능 경로

// EDA, 전처리 기능 각각의 최종 URL 경로
export const URLS_PREPROCESS = {
  // EDA
  DataUpload: "uploadfile",
  Head: "head",
  Tail: "tail",
  Shape: "shape",
  Dtype: "dtype",
  ColumnList: "columns",
  Unique: "unique",
  IsNa: "isna",
  Corr: "corr",
  Describe: "describe",
  LocDf: "loc",
  ILocDf: "iloc",
  ColConditionDf: "col_condition",

  // 전처리
  Transpose: "transpose",
  Groupby: "groupby",
  Drop: "drop",
  DropNa: "dropna",
  RenameCol: "rename",
  SortValue: "sort_values",
  MergeDf: "merge",
  ConcatDf: "concat",
  SetColumn: "set_column",

  // 시각화
  BoxPlot: "boxplot",
  HistPlot: "histplot",
  CountPlot: "countplot",
  ScatterPlot: "scatterplot",

  // 데이터셋 분할
  FeatureTargetSplit: "feature_target_split",
  TrainTestSplit: "train_test_split",
};

export const URLS_TRAIN = {
  // 모델 제작 & 훈련
  MakePipeline: "make_pipeline",
  Fit: "fit",
  Transform: "transform",
  ModelSteps: "steps",
};

export const URLS_EVAL = {
  // 모델 제작 & 훈련
  Predict: "predict",
  Score: "score",
};

// fetch API로 HTTP 통신하기 위한 설정
export const httpConfig = (data) => ({
  method: "POST",
  mode: CORS,
  body: data,
});

// 요청 대상 URL에 쿼리 파라미터를 추가하는 함수
export const targetURL = (url, params = "") => {
  // 대상 URL을 받아서 URL 객체 생성
  const targetUrl = new URL(url);
  // 백앤드 API 요청에 필요한 파라미터 설정
  targetUrl.search = new URLSearchParams(params).toString();

  return targetUrl;
};
