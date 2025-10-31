# `featureEngineeringMaterializedFeature` Submodule <a name="`featureEngineeringMaterializedFeature` Submodule" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FeatureEngineeringMaterializedFeature <a name="FeatureEngineeringMaterializedFeature" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature databricks_feature_engineering_materialized_feature}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import feature_engineering_materialized_feature

featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  feature_name: str,
  offline_store_config: FeatureEngineeringMaterializedFeatureOfflineStoreConfig = None,
  online_store_config: FeatureEngineeringMaterializedFeatureOnlineStoreConfig = None,
  pipeline_schedule_state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.featureName">feature_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#feature_name FeatureEngineeringMaterializedFeature#feature_name}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.offlineStoreConfig">offline_store_config</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig">FeatureEngineeringMaterializedFeatureOfflineStoreConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#offline_store_config FeatureEngineeringMaterializedFeature#offline_store_config}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.onlineStoreConfig">online_store_config</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig">FeatureEngineeringMaterializedFeatureOnlineStoreConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#online_store_config FeatureEngineeringMaterializedFeature#online_store_config}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.pipelineScheduleState">pipeline_schedule_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#pipeline_schedule_state FeatureEngineeringMaterializedFeature#pipeline_schedule_state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `feature_name`<sup>Required</sup> <a name="feature_name" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.featureName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#feature_name FeatureEngineeringMaterializedFeature#feature_name}.

---

##### `offline_store_config`<sup>Optional</sup> <a name="offline_store_config" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.offlineStoreConfig"></a>

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig">FeatureEngineeringMaterializedFeatureOfflineStoreConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#offline_store_config FeatureEngineeringMaterializedFeature#offline_store_config}.

---

##### `online_store_config`<sup>Optional</sup> <a name="online_store_config" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.onlineStoreConfig"></a>

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig">FeatureEngineeringMaterializedFeatureOnlineStoreConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#online_store_config FeatureEngineeringMaterializedFeature#online_store_config}.

---

##### `pipeline_schedule_state`<sup>Optional</sup> <a name="pipeline_schedule_state" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.Initializer.parameter.pipelineScheduleState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#pipeline_schedule_state FeatureEngineeringMaterializedFeature#pipeline_schedule_state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putOfflineStoreConfig">put_offline_store_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putOnlineStoreConfig">put_online_store_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetOfflineStoreConfig">reset_offline_store_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetOnlineStoreConfig">reset_online_store_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetPipelineScheduleState">reset_pipeline_schedule_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_offline_store_config` <a name="put_offline_store_config" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putOfflineStoreConfig"></a>

```python
def put_offline_store_config(
  catalog_name: str,
  schema_name: str,
  table_name_prefix: str
) -> None
```

###### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putOfflineStoreConfig.parameter.catalogName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#catalog_name FeatureEngineeringMaterializedFeature#catalog_name}.

---

###### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putOfflineStoreConfig.parameter.schemaName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#schema_name FeatureEngineeringMaterializedFeature#schema_name}.

---

###### `table_name_prefix`<sup>Required</sup> <a name="table_name_prefix" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putOfflineStoreConfig.parameter.tableNamePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#table_name_prefix FeatureEngineeringMaterializedFeature#table_name_prefix}.

---

##### `put_online_store_config` <a name="put_online_store_config" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putOnlineStoreConfig"></a>

```python
def put_online_store_config(
  capacity: str,
  name: str,
  read_replica_count: typing.Union[int, float] = None
) -> None
```

###### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putOnlineStoreConfig.parameter.capacity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#capacity FeatureEngineeringMaterializedFeature#capacity}.

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putOnlineStoreConfig.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#name FeatureEngineeringMaterializedFeature#name}.

---

###### `read_replica_count`<sup>Optional</sup> <a name="read_replica_count" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.putOnlineStoreConfig.parameter.readReplicaCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#read_replica_count FeatureEngineeringMaterializedFeature#read_replica_count}.

---

##### `reset_offline_store_config` <a name="reset_offline_store_config" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetOfflineStoreConfig"></a>

```python
def reset_offline_store_config() -> None
```

##### `reset_online_store_config` <a name="reset_online_store_config" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetOnlineStoreConfig"></a>

```python
def reset_online_store_config() -> None
```

##### `reset_pipeline_schedule_state` <a name="reset_pipeline_schedule_state" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.resetPipelineScheduleState"></a>

```python
def reset_pipeline_schedule_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FeatureEngineeringMaterializedFeature resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import feature_engineering_materialized_feature

featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import feature_engineering_materialized_feature

featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import feature_engineering_materialized_feature

featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import feature_engineering_materialized_feature

featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FeatureEngineeringMaterializedFeature resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FeatureEngineeringMaterializedFeature to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FeatureEngineeringMaterializedFeature that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FeatureEngineeringMaterializedFeature to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.lastMaterializationTime">last_materialization_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.materializedFeatureId">materialized_feature_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.offlineStoreConfig">offline_store_config</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference">FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.onlineStoreConfig">online_store_config</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference">FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.tableName">table_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.featureNameInput">feature_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.offlineStoreConfigInput">offline_store_config_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig">FeatureEngineeringMaterializedFeatureOfflineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.onlineStoreConfigInput">online_store_config_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig">FeatureEngineeringMaterializedFeatureOnlineStoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.pipelineScheduleStateInput">pipeline_schedule_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.featureName">feature_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.pipelineScheduleState">pipeline_schedule_state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `last_materialization_time`<sup>Required</sup> <a name="last_materialization_time" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.lastMaterializationTime"></a>

```python
last_materialization_time: str
```

- *Type:* str

---

##### `materialized_feature_id`<sup>Required</sup> <a name="materialized_feature_id" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.materializedFeatureId"></a>

```python
materialized_feature_id: str
```

- *Type:* str

---

##### `offline_store_config`<sup>Required</sup> <a name="offline_store_config" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.offlineStoreConfig"></a>

```python
offline_store_config: FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference">FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference</a>

---

##### `online_store_config`<sup>Required</sup> <a name="online_store_config" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.onlineStoreConfig"></a>

```python
online_store_config: FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference">FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference</a>

---

##### `table_name`<sup>Required</sup> <a name="table_name" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.tableName"></a>

```python
table_name: str
```

- *Type:* str

---

##### `feature_name_input`<sup>Optional</sup> <a name="feature_name_input" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.featureNameInput"></a>

```python
feature_name_input: str
```

- *Type:* str

---

##### `offline_store_config_input`<sup>Optional</sup> <a name="offline_store_config_input" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.offlineStoreConfigInput"></a>

```python
offline_store_config_input: IResolvable | FeatureEngineeringMaterializedFeatureOfflineStoreConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig">FeatureEngineeringMaterializedFeatureOfflineStoreConfig</a>

---

##### `online_store_config_input`<sup>Optional</sup> <a name="online_store_config_input" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.onlineStoreConfigInput"></a>

```python
online_store_config_input: IResolvable | FeatureEngineeringMaterializedFeatureOnlineStoreConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig">FeatureEngineeringMaterializedFeatureOnlineStoreConfig</a>

---

##### `pipeline_schedule_state_input`<sup>Optional</sup> <a name="pipeline_schedule_state_input" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.pipelineScheduleStateInput"></a>

```python
pipeline_schedule_state_input: str
```

- *Type:* str

---

##### `feature_name`<sup>Required</sup> <a name="feature_name" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.featureName"></a>

```python
feature_name: str
```

- *Type:* str

---

##### `pipeline_schedule_state`<sup>Required</sup> <a name="pipeline_schedule_state" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.pipelineScheduleState"></a>

```python
pipeline_schedule_state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeature.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FeatureEngineeringMaterializedFeatureConfig <a name="FeatureEngineeringMaterializedFeatureConfig" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import feature_engineering_materialized_feature

featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  feature_name: str,
  offline_store_config: FeatureEngineeringMaterializedFeatureOfflineStoreConfig = None,
  online_store_config: FeatureEngineeringMaterializedFeatureOnlineStoreConfig = None,
  pipeline_schedule_state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.featureName">feature_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#feature_name FeatureEngineeringMaterializedFeature#feature_name}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.offlineStoreConfig">offline_store_config</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig">FeatureEngineeringMaterializedFeatureOfflineStoreConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#offline_store_config FeatureEngineeringMaterializedFeature#offline_store_config}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.onlineStoreConfig">online_store_config</a></code> | <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig">FeatureEngineeringMaterializedFeatureOnlineStoreConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#online_store_config FeatureEngineeringMaterializedFeature#online_store_config}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.pipelineScheduleState">pipeline_schedule_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#pipeline_schedule_state FeatureEngineeringMaterializedFeature#pipeline_schedule_state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `feature_name`<sup>Required</sup> <a name="feature_name" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.featureName"></a>

```python
feature_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#feature_name FeatureEngineeringMaterializedFeature#feature_name}.

---

##### `offline_store_config`<sup>Optional</sup> <a name="offline_store_config" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.offlineStoreConfig"></a>

```python
offline_store_config: FeatureEngineeringMaterializedFeatureOfflineStoreConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig">FeatureEngineeringMaterializedFeatureOfflineStoreConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#offline_store_config FeatureEngineeringMaterializedFeature#offline_store_config}.

---

##### `online_store_config`<sup>Optional</sup> <a name="online_store_config" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.onlineStoreConfig"></a>

```python
online_store_config: FeatureEngineeringMaterializedFeatureOnlineStoreConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig">FeatureEngineeringMaterializedFeatureOnlineStoreConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#online_store_config FeatureEngineeringMaterializedFeature#online_store_config}.

---

##### `pipeline_schedule_state`<sup>Optional</sup> <a name="pipeline_schedule_state" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureConfig.property.pipelineScheduleState"></a>

```python
pipeline_schedule_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#pipeline_schedule_state FeatureEngineeringMaterializedFeature#pipeline_schedule_state}.

---

### FeatureEngineeringMaterializedFeatureOfflineStoreConfig <a name="FeatureEngineeringMaterializedFeatureOfflineStoreConfig" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import feature_engineering_materialized_feature

featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig(
  catalog_name: str,
  schema_name: str,
  table_name_prefix: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#catalog_name FeatureEngineeringMaterializedFeature#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#schema_name FeatureEngineeringMaterializedFeature#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.tableNamePrefix">table_name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#table_name_prefix FeatureEngineeringMaterializedFeature#table_name_prefix}. |

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#catalog_name FeatureEngineeringMaterializedFeature#catalog_name}.

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#schema_name FeatureEngineeringMaterializedFeature#schema_name}.

---

##### `table_name_prefix`<sup>Required</sup> <a name="table_name_prefix" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig.property.tableNamePrefix"></a>

```python
table_name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#table_name_prefix FeatureEngineeringMaterializedFeature#table_name_prefix}.

---

### FeatureEngineeringMaterializedFeatureOnlineStoreConfig <a name="FeatureEngineeringMaterializedFeatureOnlineStoreConfig" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import feature_engineering_materialized_feature

featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig(
  capacity: str,
  name: str,
  read_replica_count: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.capacity">capacity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#capacity FeatureEngineeringMaterializedFeature#capacity}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#name FeatureEngineeringMaterializedFeature#name}. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.readReplicaCount">read_replica_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#read_replica_count FeatureEngineeringMaterializedFeature#read_replica_count}. |

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.capacity"></a>

```python
capacity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#capacity FeatureEngineeringMaterializedFeature#capacity}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#name FeatureEngineeringMaterializedFeature#name}.

---

##### `read_replica_count`<sup>Optional</sup> <a name="read_replica_count" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig.property.readReplicaCount"></a>

```python
read_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/feature_engineering_materialized_feature#read_replica_count FeatureEngineeringMaterializedFeature#read_replica_count}.

---

## Classes <a name="Classes" id="Classes"></a>

### FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference <a name="FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import feature_engineering_materialized_feature

featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.tableNamePrefixInput">table_name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.tableNamePrefix">table_name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig">FeatureEngineeringMaterializedFeatureOfflineStoreConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `table_name_prefix_input`<sup>Optional</sup> <a name="table_name_prefix_input" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.tableNamePrefixInput"></a>

```python
table_name_prefix_input: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `table_name_prefix`<sup>Required</sup> <a name="table_name_prefix" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.tableNamePrefix"></a>

```python
table_name_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FeatureEngineeringMaterializedFeatureOfflineStoreConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOfflineStoreConfig">FeatureEngineeringMaterializedFeatureOfflineStoreConfig</a>

---


### FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference <a name="FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import feature_engineering_materialized_feature

featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.resetReadReplicaCount">reset_read_replica_count</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read_replica_count` <a name="reset_read_replica_count" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.resetReadReplicaCount"></a>

```python
def reset_read_replica_count() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.creator">creator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.capacityInput">capacity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.readReplicaCountInput">read_replica_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.capacity">capacity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.readReplicaCount">read_replica_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig">FeatureEngineeringMaterializedFeatureOnlineStoreConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.creator"></a>

```python
creator: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `capacity_input`<sup>Optional</sup> <a name="capacity_input" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.capacityInput"></a>

```python
capacity_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `read_replica_count_input`<sup>Optional</sup> <a name="read_replica_count_input" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.readReplicaCountInput"></a>

```python
read_replica_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.capacity"></a>

```python
capacity: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `read_replica_count`<sup>Required</sup> <a name="read_replica_count" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.readReplicaCount"></a>

```python
read_replica_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | FeatureEngineeringMaterializedFeatureOnlineStoreConfig
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.featureEngineeringMaterializedFeature.FeatureEngineeringMaterializedFeatureOnlineStoreConfig">FeatureEngineeringMaterializedFeatureOnlineStoreConfig</a>

---



