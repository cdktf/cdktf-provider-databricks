# `dataDatabricksMlflowExperiment` Submodule <a name="`dataDatabricksMlflowExperiment` Submodule" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMlflowExperiment <a name="DataDatabricksMlflowExperiment" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment databricks_mlflow_experiment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_mlflow_experiment

dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  artifact_location: str = None,
  creation_time: typing.Union[int, float] = None,
  experiment_id: str = None,
  id: str = None,
  last_update_time: typing.Union[int, float] = None,
  lifecycle_stage: str = None,
  name: str = None,
  tags: typing.Union[IResolvable, typing.List[DataDatabricksMlflowExperimentTags]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.artifactLocation">artifact_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#artifact_location DataDatabricksMlflowExperiment#artifact_location}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#creation_time DataDatabricksMlflowExperiment#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.experimentId">experiment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#experiment_id DataDatabricksMlflowExperiment#experiment_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#id DataDatabricksMlflowExperiment#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.lastUpdateTime">last_update_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#last_update_time DataDatabricksMlflowExperiment#last_update_time}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.lifecycleStage">lifecycle_stage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#lifecycle_stage DataDatabricksMlflowExperiment#lifecycle_stage}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#name DataDatabricksMlflowExperiment#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags">DataDatabricksMlflowExperimentTags</a>]]</code> | tags block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `artifact_location`<sup>Optional</sup> <a name="artifact_location" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.artifactLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#artifact_location DataDatabricksMlflowExperiment#artifact_location}.

---

##### `creation_time`<sup>Optional</sup> <a name="creation_time" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.creationTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#creation_time DataDatabricksMlflowExperiment#creation_time}.

---

##### `experiment_id`<sup>Optional</sup> <a name="experiment_id" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.experimentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#experiment_id DataDatabricksMlflowExperiment#experiment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#id DataDatabricksMlflowExperiment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `last_update_time`<sup>Optional</sup> <a name="last_update_time" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.lastUpdateTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#last_update_time DataDatabricksMlflowExperiment#last_update_time}.

---

##### `lifecycle_stage`<sup>Optional</sup> <a name="lifecycle_stage" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.lifecycleStage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#lifecycle_stage DataDatabricksMlflowExperiment#lifecycle_stage}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#name DataDatabricksMlflowExperiment#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.Initializer.parameter.tags"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags">DataDatabricksMlflowExperimentTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#tags DataDatabricksMlflowExperiment#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetArtifactLocation">reset_artifact_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetCreationTime">reset_creation_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetExperimentId">reset_experiment_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetLastUpdateTime">reset_last_update_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetLifecycleStage">reset_lifecycle_stage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_tags` <a name="put_tags" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.putTags"></a>

```python
def put_tags(
  value: typing.Union[IResolvable, typing.List[DataDatabricksMlflowExperimentTags]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.putTags.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags">DataDatabricksMlflowExperimentTags</a>]]

---

##### `reset_artifact_location` <a name="reset_artifact_location" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetArtifactLocation"></a>

```python
def reset_artifact_location() -> None
```

##### `reset_creation_time` <a name="reset_creation_time" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetCreationTime"></a>

```python
def reset_creation_time() -> None
```

##### `reset_experiment_id` <a name="reset_experiment_id" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetExperimentId"></a>

```python
def reset_experiment_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_last_update_time` <a name="reset_last_update_time" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetLastUpdateTime"></a>

```python
def reset_last_update_time() -> None
```

##### `reset_lifecycle_stage` <a name="reset_lifecycle_stage" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetLifecycleStage"></a>

```python
def reset_lifecycle_stage() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksMlflowExperiment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_mlflow_experiment

dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_mlflow_experiment

dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_mlflow_experiment

dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_mlflow_experiment

dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksMlflowExperiment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksMlflowExperiment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksMlflowExperiment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksMlflowExperiment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList">DataDatabricksMlflowExperimentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.artifactLocationInput">artifact_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.creationTimeInput">creation_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.experimentIdInput">experiment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lastUpdateTimeInput">last_update_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lifecycleStageInput">lifecycle_stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.tagsInput">tags_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags">DataDatabricksMlflowExperimentTags</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.artifactLocation">artifact_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.experimentId">experiment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lastUpdateTime">last_update_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lifecycleStage">lifecycle_stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.tags"></a>

```python
tags: DataDatabricksMlflowExperimentTagsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList">DataDatabricksMlflowExperimentTagsList</a>

---

##### `artifact_location_input`<sup>Optional</sup> <a name="artifact_location_input" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.artifactLocationInput"></a>

```python
artifact_location_input: str
```

- *Type:* str

---

##### `creation_time_input`<sup>Optional</sup> <a name="creation_time_input" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.creationTimeInput"></a>

```python
creation_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `experiment_id_input`<sup>Optional</sup> <a name="experiment_id_input" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.experimentIdInput"></a>

```python
experiment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `last_update_time_input`<sup>Optional</sup> <a name="last_update_time_input" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lastUpdateTimeInput"></a>

```python
last_update_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lifecycle_stage_input`<sup>Optional</sup> <a name="lifecycle_stage_input" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lifecycleStageInput"></a>

```python
lifecycle_stage_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.tagsInput"></a>

```python
tags_input: typing.Union[IResolvable, typing.List[DataDatabricksMlflowExperimentTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags">DataDatabricksMlflowExperimentTags</a>]]

---

##### `artifact_location`<sup>Required</sup> <a name="artifact_location" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.artifactLocation"></a>

```python
artifact_location: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `experiment_id`<sup>Required</sup> <a name="experiment_id" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.experimentId"></a>

```python
experiment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_update_time`<sup>Required</sup> <a name="last_update_time" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lastUpdateTime"></a>

```python
last_update_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lifecycle_stage`<sup>Required</sup> <a name="lifecycle_stage" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.lifecycleStage"></a>

```python
lifecycle_stage: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperiment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMlflowExperimentConfig <a name="DataDatabricksMlflowExperimentConfig" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_mlflow_experiment

dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  artifact_location: str = None,
  creation_time: typing.Union[int, float] = None,
  experiment_id: str = None,
  id: str = None,
  last_update_time: typing.Union[int, float] = None,
  lifecycle_stage: str = None,
  name: str = None,
  tags: typing.Union[IResolvable, typing.List[DataDatabricksMlflowExperimentTags]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.artifactLocation">artifact_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#artifact_location DataDatabricksMlflowExperiment#artifact_location}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#creation_time DataDatabricksMlflowExperiment#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.experimentId">experiment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#experiment_id DataDatabricksMlflowExperiment#experiment_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#id DataDatabricksMlflowExperiment#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.lastUpdateTime">last_update_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#last_update_time DataDatabricksMlflowExperiment#last_update_time}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.lifecycleStage">lifecycle_stage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#lifecycle_stage DataDatabricksMlflowExperiment#lifecycle_stage}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#name DataDatabricksMlflowExperiment#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.tags">tags</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags">DataDatabricksMlflowExperimentTags</a>]]</code> | tags block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `artifact_location`<sup>Optional</sup> <a name="artifact_location" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.artifactLocation"></a>

```python
artifact_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#artifact_location DataDatabricksMlflowExperiment#artifact_location}.

---

##### `creation_time`<sup>Optional</sup> <a name="creation_time" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#creation_time DataDatabricksMlflowExperiment#creation_time}.

---

##### `experiment_id`<sup>Optional</sup> <a name="experiment_id" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.experimentId"></a>

```python
experiment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#experiment_id DataDatabricksMlflowExperiment#experiment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#id DataDatabricksMlflowExperiment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `last_update_time`<sup>Optional</sup> <a name="last_update_time" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.lastUpdateTime"></a>

```python
last_update_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#last_update_time DataDatabricksMlflowExperiment#last_update_time}.

---

##### `lifecycle_stage`<sup>Optional</sup> <a name="lifecycle_stage" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.lifecycleStage"></a>

```python
lifecycle_stage: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#lifecycle_stage DataDatabricksMlflowExperiment#lifecycle_stage}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#name DataDatabricksMlflowExperiment#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentConfig.property.tags"></a>

```python
tags: typing.Union[IResolvable, typing.List[DataDatabricksMlflowExperimentTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags">DataDatabricksMlflowExperimentTags</a>]]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#tags DataDatabricksMlflowExperiment#tags}

---

### DataDatabricksMlflowExperimentTags <a name="DataDatabricksMlflowExperimentTags" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_mlflow_experiment

dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#key DataDatabricksMlflowExperiment#key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#value DataDatabricksMlflowExperiment#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#key DataDatabricksMlflowExperiment#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/mlflow_experiment#value DataDatabricksMlflowExperiment#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMlflowExperimentTagsList <a name="DataDatabricksMlflowExperimentTagsList" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_mlflow_experiment

dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksMlflowExperimentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags">DataDatabricksMlflowExperimentTags</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksMlflowExperimentTags]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags">DataDatabricksMlflowExperimentTags</a>]]

---


### DataDatabricksMlflowExperimentTagsOutputReference <a name="DataDatabricksMlflowExperimentTagsOutputReference" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_mlflow_experiment

dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags">DataDatabricksMlflowExperimentTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTagsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksMlflowExperimentTags]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksMlflowExperiment.DataDatabricksMlflowExperimentTags">DataDatabricksMlflowExperimentTags</a>]

---



