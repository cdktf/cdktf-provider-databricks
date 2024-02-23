# `mlflowExperiment` Submodule <a name="`mlflowExperiment` Submodule" id="@cdktf/provider-databricks.mlflowExperiment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MlflowExperiment <a name="MlflowExperiment" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment databricks_mlflow_experiment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mlflow_experiment

mlflowExperiment.MlflowExperiment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  artifact_location: str = None,
  creation_time: typing.Union[int, float] = None,
  description: str = None,
  experiment_id: str = None,
  id: str = None,
  last_update_time: typing.Union[int, float] = None,
  lifecycle_stage: str = None,
  timeouts: MlflowExperimentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#name MlflowExperiment#name}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.artifactLocation">artifact_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#artifact_location MlflowExperiment#artifact_location}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#creation_time MlflowExperiment#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#description MlflowExperiment#description}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.experimentId">experiment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#experiment_id MlflowExperiment#experiment_id}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#id MlflowExperiment#id}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.lastUpdateTime">last_update_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#last_update_time MlflowExperiment#last_update_time}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.lifecycleStage">lifecycle_stage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#lifecycle_stage MlflowExperiment#lifecycle_stage}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts">MlflowExperimentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#name MlflowExperiment#name}.

---

##### `artifact_location`<sup>Optional</sup> <a name="artifact_location" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.artifactLocation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#artifact_location MlflowExperiment#artifact_location}.

---

##### `creation_time`<sup>Optional</sup> <a name="creation_time" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.creationTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#creation_time MlflowExperiment#creation_time}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#description MlflowExperiment#description}.

---

##### `experiment_id`<sup>Optional</sup> <a name="experiment_id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.experimentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#experiment_id MlflowExperiment#experiment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#id MlflowExperiment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `last_update_time`<sup>Optional</sup> <a name="last_update_time" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.lastUpdateTime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#last_update_time MlflowExperiment#last_update_time}.

---

##### `lifecycle_stage`<sup>Optional</sup> <a name="lifecycle_stage" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.lifecycleStage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#lifecycle_stage MlflowExperiment#lifecycle_stage}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts">MlflowExperimentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#timeouts MlflowExperiment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetArtifactLocation">reset_artifact_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetCreationTime">reset_creation_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetExperimentId">reset_experiment_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetLastUpdateTime">reset_last_update_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetLifecycleStage">reset_lifecycle_stage</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.putTimeouts"></a>

```python
def put_timeouts() -> None
```

##### `reset_artifact_location` <a name="reset_artifact_location" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetArtifactLocation"></a>

```python
def reset_artifact_location() -> None
```

##### `reset_creation_time` <a name="reset_creation_time" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetCreationTime"></a>

```python
def reset_creation_time() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_experiment_id` <a name="reset_experiment_id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetExperimentId"></a>

```python
def reset_experiment_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_last_update_time` <a name="reset_last_update_time" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetLastUpdateTime"></a>

```python
def reset_last_update_time() -> None
```

##### `reset_lifecycle_stage` <a name="reset_lifecycle_stage" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.resetLifecycleStage"></a>

```python
def reset_lifecycle_stage() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MlflowExperiment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import mlflow_experiment

mlflowExperiment.MlflowExperiment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import mlflow_experiment

mlflowExperiment.MlflowExperiment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import mlflow_experiment

mlflowExperiment.MlflowExperiment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import mlflow_experiment

mlflowExperiment.MlflowExperiment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MlflowExperiment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MlflowExperiment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MlflowExperiment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MlflowExperiment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference">MlflowExperimentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.artifactLocationInput">artifact_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.creationTimeInput">creation_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.experimentIdInput">experiment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.lastUpdateTimeInput">last_update_time_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.lifecycleStageInput">lifecycle_stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts">MlflowExperimentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.artifactLocation">artifact_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.experimentId">experiment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.lastUpdateTime">last_update_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.lifecycleStage">lifecycle_stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.timeouts"></a>

```python
timeouts: MlflowExperimentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference">MlflowExperimentTimeoutsOutputReference</a>

---

##### `artifact_location_input`<sup>Optional</sup> <a name="artifact_location_input" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.artifactLocationInput"></a>

```python
artifact_location_input: str
```

- *Type:* str

---

##### `creation_time_input`<sup>Optional</sup> <a name="creation_time_input" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.creationTimeInput"></a>

```python
creation_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `experiment_id_input`<sup>Optional</sup> <a name="experiment_id_input" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.experimentIdInput"></a>

```python
experiment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `last_update_time_input`<sup>Optional</sup> <a name="last_update_time_input" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.lastUpdateTimeInput"></a>

```python
last_update_time_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lifecycle_stage_input`<sup>Optional</sup> <a name="lifecycle_stage_input" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.lifecycleStageInput"></a>

```python
lifecycle_stage_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MlflowExperimentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts">MlflowExperimentTimeouts</a>]

---

##### `artifact_location`<sup>Required</sup> <a name="artifact_location" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.artifactLocation"></a>

```python
artifact_location: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `experiment_id`<sup>Required</sup> <a name="experiment_id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.experimentId"></a>

```python
experiment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_update_time`<sup>Required</sup> <a name="last_update_time" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.lastUpdateTime"></a>

```python
last_update_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `lifecycle_stage`<sup>Required</sup> <a name="lifecycle_stage" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.lifecycleStage"></a>

```python
lifecycle_stage: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperiment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MlflowExperimentConfig <a name="MlflowExperimentConfig" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mlflow_experiment

mlflowExperiment.MlflowExperimentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  artifact_location: str = None,
  creation_time: typing.Union[int, float] = None,
  description: str = None,
  experiment_id: str = None,
  id: str = None,
  last_update_time: typing.Union[int, float] = None,
  lifecycle_stage: str = None,
  timeouts: MlflowExperimentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#name MlflowExperiment#name}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.artifactLocation">artifact_location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#artifact_location MlflowExperiment#artifact_location}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.creationTime">creation_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#creation_time MlflowExperiment#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#description MlflowExperiment#description}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.experimentId">experiment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#experiment_id MlflowExperiment#experiment_id}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#id MlflowExperiment#id}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.lastUpdateTime">last_update_time</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#last_update_time MlflowExperiment#last_update_time}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.lifecycleStage">lifecycle_stage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#lifecycle_stage MlflowExperiment#lifecycle_stage}. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts">MlflowExperimentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#name MlflowExperiment#name}.

---

##### `artifact_location`<sup>Optional</sup> <a name="artifact_location" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.artifactLocation"></a>

```python
artifact_location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#artifact_location MlflowExperiment#artifact_location}.

---

##### `creation_time`<sup>Optional</sup> <a name="creation_time" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.creationTime"></a>

```python
creation_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#creation_time MlflowExperiment#creation_time}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#description MlflowExperiment#description}.

---

##### `experiment_id`<sup>Optional</sup> <a name="experiment_id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.experimentId"></a>

```python
experiment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#experiment_id MlflowExperiment#experiment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#id MlflowExperiment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `last_update_time`<sup>Optional</sup> <a name="last_update_time" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.lastUpdateTime"></a>

```python
last_update_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#last_update_time MlflowExperiment#last_update_time}.

---

##### `lifecycle_stage`<sup>Optional</sup> <a name="lifecycle_stage" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.lifecycleStage"></a>

```python
lifecycle_stage: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#lifecycle_stage MlflowExperiment#lifecycle_stage}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentConfig.property.timeouts"></a>

```python
timeouts: MlflowExperimentTimeouts
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts">MlflowExperimentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.1/docs/resources/mlflow_experiment#timeouts MlflowExperiment#timeouts}

---

### MlflowExperimentTimeouts <a name="MlflowExperimentTimeouts" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mlflow_experiment

mlflowExperiment.MlflowExperimentTimeouts()
```


## Classes <a name="Classes" id="Classes"></a>

### MlflowExperimentTimeoutsOutputReference <a name="MlflowExperimentTimeoutsOutputReference" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import mlflow_experiment

mlflowExperiment.MlflowExperimentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts">MlflowExperimentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MlflowExperimentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.mlflowExperiment.MlflowExperimentTimeouts">MlflowExperimentTimeouts</a>]

---



