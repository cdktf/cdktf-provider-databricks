# `dataDatabricksAlertV2` Submodule <a name="`dataDatabricksAlertV2` Submodule" id="@cdktf/provider-databricks.dataDatabricksAlertV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAlertV2 <a name="DataDatabricksAlertV2" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2 databricks_alert_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alert_v2

dataDatabricksAlertV2.DataDatabricksAlertV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_description: str = None,
  custom_summary: str = None,
  display_name: str = None,
  evaluation: DataDatabricksAlertV2Evaluation = None,
  parent_path: str = None,
  query_text: str = None,
  run_as: DataDatabricksAlertV2RunAs = None,
  run_as_user_name: str = None,
  schedule: DataDatabricksAlertV2Schedule = None,
  warehouse_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.customDescription">custom_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#custom_description DataDatabricksAlertV2#custom_description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.customSummary">custom_summary</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#custom_summary DataDatabricksAlertV2#custom_summary}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#display_name DataDatabricksAlertV2#display_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.evaluation">evaluation</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation">DataDatabricksAlertV2Evaluation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#evaluation DataDatabricksAlertV2#evaluation}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.parentPath">parent_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#parent_path DataDatabricksAlertV2#parent_path}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.queryText">query_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#query_text DataDatabricksAlertV2#query_text}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.runAs">run_as</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs">DataDatabricksAlertV2RunAs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#run_as DataDatabricksAlertV2#run_as}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.runAsUserName">run_as_user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#run_as_user_name DataDatabricksAlertV2#run_as_user_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule">DataDatabricksAlertV2Schedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#schedule DataDatabricksAlertV2#schedule}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.warehouseId">warehouse_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#warehouse_id DataDatabricksAlertV2#warehouse_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_description`<sup>Optional</sup> <a name="custom_description" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.customDescription"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#custom_description DataDatabricksAlertV2#custom_description}.

---

##### `custom_summary`<sup>Optional</sup> <a name="custom_summary" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.customSummary"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#custom_summary DataDatabricksAlertV2#custom_summary}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#display_name DataDatabricksAlertV2#display_name}.

---

##### `evaluation`<sup>Optional</sup> <a name="evaluation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.evaluation"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation">DataDatabricksAlertV2Evaluation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#evaluation DataDatabricksAlertV2#evaluation}.

---

##### `parent_path`<sup>Optional</sup> <a name="parent_path" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.parentPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#parent_path DataDatabricksAlertV2#parent_path}.

---

##### `query_text`<sup>Optional</sup> <a name="query_text" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.queryText"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#query_text DataDatabricksAlertV2#query_text}.

---

##### `run_as`<sup>Optional</sup> <a name="run_as" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.runAs"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs">DataDatabricksAlertV2RunAs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#run_as DataDatabricksAlertV2#run_as}.

---

##### `run_as_user_name`<sup>Optional</sup> <a name="run_as_user_name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.runAsUserName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#run_as_user_name DataDatabricksAlertV2#run_as_user_name}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.schedule"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule">DataDatabricksAlertV2Schedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#schedule DataDatabricksAlertV2#schedule}.

---

##### `warehouse_id`<sup>Optional</sup> <a name="warehouse_id" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.warehouseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#warehouse_id DataDatabricksAlertV2#warehouse_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putEvaluation">put_evaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putRunAs">put_run_as</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putSchedule">put_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetCustomDescription">reset_custom_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetCustomSummary">reset_custom_summary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetEvaluation">reset_evaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetParentPath">reset_parent_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetQueryText">reset_query_text</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetRunAs">reset_run_as</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetRunAsUserName">reset_run_as_user_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetWarehouseId">reset_warehouse_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_evaluation` <a name="put_evaluation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putEvaluation"></a>

```python
def put_evaluation(
  comparison_operator: str = None,
  empty_result_state: str = None,
  notification: DataDatabricksAlertV2EvaluationNotification = None,
  source: DataDatabricksAlertV2EvaluationSource = None,
  threshold: DataDatabricksAlertV2EvaluationThreshold = None
) -> None
```

###### `comparison_operator`<sup>Optional</sup> <a name="comparison_operator" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putEvaluation.parameter.comparisonOperator"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#comparison_operator DataDatabricksAlertV2#comparison_operator}.

---

###### `empty_result_state`<sup>Optional</sup> <a name="empty_result_state" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putEvaluation.parameter.emptyResultState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#empty_result_state DataDatabricksAlertV2#empty_result_state}.

---

###### `notification`<sup>Optional</sup> <a name="notification" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putEvaluation.parameter.notification"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification">DataDatabricksAlertV2EvaluationNotification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#notification DataDatabricksAlertV2#notification}.

---

###### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putEvaluation.parameter.source"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource">DataDatabricksAlertV2EvaluationSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#source DataDatabricksAlertV2#source}.

---

###### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putEvaluation.parameter.threshold"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold">DataDatabricksAlertV2EvaluationThreshold</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#threshold DataDatabricksAlertV2#threshold}.

---

##### `put_run_as` <a name="put_run_as" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putRunAs"></a>

```python
def put_run_as(
  service_principal_name: str = None,
  user_name: str = None
) -> None
```

###### `service_principal_name`<sup>Optional</sup> <a name="service_principal_name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putRunAs.parameter.servicePrincipalName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#service_principal_name DataDatabricksAlertV2#service_principal_name}.

---

###### `user_name`<sup>Optional</sup> <a name="user_name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putRunAs.parameter.userName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#user_name DataDatabricksAlertV2#user_name}.

---

##### `put_schedule` <a name="put_schedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putSchedule"></a>

```python
def put_schedule(
  pause_status: str = None,
  quartz_cron_schedule: str = None,
  timezone_id: str = None
) -> None
```

###### `pause_status`<sup>Optional</sup> <a name="pause_status" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putSchedule.parameter.pauseStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#pause_status DataDatabricksAlertV2#pause_status}.

---

###### `quartz_cron_schedule`<sup>Optional</sup> <a name="quartz_cron_schedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putSchedule.parameter.quartzCronSchedule"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#quartz_cron_schedule DataDatabricksAlertV2#quartz_cron_schedule}.

---

###### `timezone_id`<sup>Optional</sup> <a name="timezone_id" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putSchedule.parameter.timezoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#timezone_id DataDatabricksAlertV2#timezone_id}.

---

##### `reset_custom_description` <a name="reset_custom_description" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetCustomDescription"></a>

```python
def reset_custom_description() -> None
```

##### `reset_custom_summary` <a name="reset_custom_summary" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetCustomSummary"></a>

```python
def reset_custom_summary() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_evaluation` <a name="reset_evaluation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetEvaluation"></a>

```python
def reset_evaluation() -> None
```

##### `reset_parent_path` <a name="reset_parent_path" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetParentPath"></a>

```python
def reset_parent_path() -> None
```

##### `reset_query_text` <a name="reset_query_text" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetQueryText"></a>

```python
def reset_query_text() -> None
```

##### `reset_run_as` <a name="reset_run_as" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetRunAs"></a>

```python
def reset_run_as() -> None
```

##### `reset_run_as_user_name` <a name="reset_run_as_user_name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetRunAsUserName"></a>

```python
def reset_run_as_user_name() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_warehouse_id` <a name="reset_warehouse_id" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetWarehouseId"></a>

```python
def reset_warehouse_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksAlertV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alert_v2

dataDatabricksAlertV2.DataDatabricksAlertV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alert_v2

dataDatabricksAlertV2.DataDatabricksAlertV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alert_v2

dataDatabricksAlertV2.DataDatabricksAlertV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alert_v2

dataDatabricksAlertV2.DataDatabricksAlertV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksAlertV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksAlertV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksAlertV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAlertV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.effectiveRunAs">effective_run_as</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference">DataDatabricksAlertV2EffectiveRunAsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.evaluation">evaluation</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference">DataDatabricksAlertV2EvaluationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.lifecycleState">lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.ownerUserName">owner_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.runAs">run_as</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference">DataDatabricksAlertV2RunAsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference">DataDatabricksAlertV2ScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customDescriptionInput">custom_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customSummaryInput">custom_summary_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.evaluationInput">evaluation_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation">DataDatabricksAlertV2Evaluation</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.parentPathInput">parent_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.queryTextInput">query_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.runAsInput">run_as_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs">DataDatabricksAlertV2RunAs</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.runAsUserNameInput">run_as_user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.scheduleInput">schedule_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule">DataDatabricksAlertV2Schedule</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.warehouseIdInput">warehouse_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customDescription">custom_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customSummary">custom_summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.parentPath">parent_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.queryText">query_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.runAsUserName">run_as_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.warehouseId">warehouse_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_run_as`<sup>Required</sup> <a name="effective_run_as" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.effectiveRunAs"></a>

```python
effective_run_as: DataDatabricksAlertV2EffectiveRunAsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference">DataDatabricksAlertV2EffectiveRunAsOutputReference</a>

---

##### `evaluation`<sup>Required</sup> <a name="evaluation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.evaluation"></a>

```python
evaluation: DataDatabricksAlertV2EvaluationOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference">DataDatabricksAlertV2EvaluationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_state`<sup>Required</sup> <a name="lifecycle_state" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.lifecycleState"></a>

```python
lifecycle_state: str
```

- *Type:* str

---

##### `owner_user_name`<sup>Required</sup> <a name="owner_user_name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.ownerUserName"></a>

```python
owner_user_name: str
```

- *Type:* str

---

##### `run_as`<sup>Required</sup> <a name="run_as" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.runAs"></a>

```python
run_as: DataDatabricksAlertV2RunAsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference">DataDatabricksAlertV2RunAsOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.schedule"></a>

```python
schedule: DataDatabricksAlertV2ScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference">DataDatabricksAlertV2ScheduleOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `custom_description_input`<sup>Optional</sup> <a name="custom_description_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customDescriptionInput"></a>

```python
custom_description_input: str
```

- *Type:* str

---

##### `custom_summary_input`<sup>Optional</sup> <a name="custom_summary_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customSummaryInput"></a>

```python
custom_summary_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `evaluation_input`<sup>Optional</sup> <a name="evaluation_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.evaluationInput"></a>

```python
evaluation_input: typing.Union[IResolvable, DataDatabricksAlertV2Evaluation]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation">DataDatabricksAlertV2Evaluation</a>]

---

##### `parent_path_input`<sup>Optional</sup> <a name="parent_path_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.parentPathInput"></a>

```python
parent_path_input: str
```

- *Type:* str

---

##### `query_text_input`<sup>Optional</sup> <a name="query_text_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.queryTextInput"></a>

```python
query_text_input: str
```

- *Type:* str

---

##### `run_as_input`<sup>Optional</sup> <a name="run_as_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.runAsInput"></a>

```python
run_as_input: typing.Union[IResolvable, DataDatabricksAlertV2RunAs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs">DataDatabricksAlertV2RunAs</a>]

---

##### `run_as_user_name_input`<sup>Optional</sup> <a name="run_as_user_name_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.runAsUserNameInput"></a>

```python
run_as_user_name_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.scheduleInput"></a>

```python
schedule_input: typing.Union[IResolvable, DataDatabricksAlertV2Schedule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule">DataDatabricksAlertV2Schedule</a>]

---

##### `warehouse_id_input`<sup>Optional</sup> <a name="warehouse_id_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.warehouseIdInput"></a>

```python
warehouse_id_input: str
```

- *Type:* str

---

##### `custom_description`<sup>Required</sup> <a name="custom_description" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customDescription"></a>

```python
custom_description: str
```

- *Type:* str

---

##### `custom_summary`<sup>Required</sup> <a name="custom_summary" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customSummary"></a>

```python
custom_summary: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `parent_path`<sup>Required</sup> <a name="parent_path" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.parentPath"></a>

```python
parent_path: str
```

- *Type:* str

---

##### `query_text`<sup>Required</sup> <a name="query_text" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.queryText"></a>

```python
query_text: str
```

- *Type:* str

---

##### `run_as_user_name`<sup>Required</sup> <a name="run_as_user_name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.runAsUserName"></a>

```python
run_as_user_name: str
```

- *Type:* str

---

##### `warehouse_id`<sup>Required</sup> <a name="warehouse_id" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAlertV2Config <a name="DataDatabricksAlertV2Config" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alert_v2

dataDatabricksAlertV2.DataDatabricksAlertV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_description: str = None,
  custom_summary: str = None,
  display_name: str = None,
  evaluation: DataDatabricksAlertV2Evaluation = None,
  parent_path: str = None,
  query_text: str = None,
  run_as: DataDatabricksAlertV2RunAs = None,
  run_as_user_name: str = None,
  schedule: DataDatabricksAlertV2Schedule = None,
  warehouse_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.customDescription">custom_description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#custom_description DataDatabricksAlertV2#custom_description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.customSummary">custom_summary</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#custom_summary DataDatabricksAlertV2#custom_summary}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#display_name DataDatabricksAlertV2#display_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.evaluation">evaluation</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation">DataDatabricksAlertV2Evaluation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#evaluation DataDatabricksAlertV2#evaluation}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.parentPath">parent_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#parent_path DataDatabricksAlertV2#parent_path}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.queryText">query_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#query_text DataDatabricksAlertV2#query_text}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.runAs">run_as</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs">DataDatabricksAlertV2RunAs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#run_as DataDatabricksAlertV2#run_as}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.runAsUserName">run_as_user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#run_as_user_name DataDatabricksAlertV2#run_as_user_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule">DataDatabricksAlertV2Schedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#schedule DataDatabricksAlertV2#schedule}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.warehouseId">warehouse_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#warehouse_id DataDatabricksAlertV2#warehouse_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_description`<sup>Optional</sup> <a name="custom_description" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.customDescription"></a>

```python
custom_description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#custom_description DataDatabricksAlertV2#custom_description}.

---

##### `custom_summary`<sup>Optional</sup> <a name="custom_summary" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.customSummary"></a>

```python
custom_summary: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#custom_summary DataDatabricksAlertV2#custom_summary}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#display_name DataDatabricksAlertV2#display_name}.

---

##### `evaluation`<sup>Optional</sup> <a name="evaluation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.evaluation"></a>

```python
evaluation: DataDatabricksAlertV2Evaluation
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation">DataDatabricksAlertV2Evaluation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#evaluation DataDatabricksAlertV2#evaluation}.

---

##### `parent_path`<sup>Optional</sup> <a name="parent_path" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.parentPath"></a>

```python
parent_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#parent_path DataDatabricksAlertV2#parent_path}.

---

##### `query_text`<sup>Optional</sup> <a name="query_text" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.queryText"></a>

```python
query_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#query_text DataDatabricksAlertV2#query_text}.

---

##### `run_as`<sup>Optional</sup> <a name="run_as" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.runAs"></a>

```python
run_as: DataDatabricksAlertV2RunAs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs">DataDatabricksAlertV2RunAs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#run_as DataDatabricksAlertV2#run_as}.

---

##### `run_as_user_name`<sup>Optional</sup> <a name="run_as_user_name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.runAsUserName"></a>

```python
run_as_user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#run_as_user_name DataDatabricksAlertV2#run_as_user_name}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.schedule"></a>

```python
schedule: DataDatabricksAlertV2Schedule
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule">DataDatabricksAlertV2Schedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#schedule DataDatabricksAlertV2#schedule}.

---

##### `warehouse_id`<sup>Optional</sup> <a name="warehouse_id" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#warehouse_id DataDatabricksAlertV2#warehouse_id}.

---

### DataDatabricksAlertV2EffectiveRunAs <a name="DataDatabricksAlertV2EffectiveRunAs" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alert_v2

dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs(
  service_principal_name: str = None,
  user_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs.property.servicePrincipalName">service_principal_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#service_principal_name DataDatabricksAlertV2#service_principal_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#user_name DataDatabricksAlertV2#user_name}. |

---

##### `service_principal_name`<sup>Optional</sup> <a name="service_principal_name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs.property.servicePrincipalName"></a>

```python
service_principal_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#service_principal_name DataDatabricksAlertV2#service_principal_name}.

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#user_name DataDatabricksAlertV2#user_name}.

---

### DataDatabricksAlertV2Evaluation <a name="DataDatabricksAlertV2Evaluation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alert_v2

dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation(
  comparison_operator: str = None,
  empty_result_state: str = None,
  notification: DataDatabricksAlertV2EvaluationNotification = None,
  source: DataDatabricksAlertV2EvaluationSource = None,
  threshold: DataDatabricksAlertV2EvaluationThreshold = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#comparison_operator DataDatabricksAlertV2#comparison_operator}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.emptyResultState">empty_result_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#empty_result_state DataDatabricksAlertV2#empty_result_state}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification">DataDatabricksAlertV2EvaluationNotification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#notification DataDatabricksAlertV2#notification}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.source">source</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource">DataDatabricksAlertV2EvaluationSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#source DataDatabricksAlertV2#source}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.threshold">threshold</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold">DataDatabricksAlertV2EvaluationThreshold</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#threshold DataDatabricksAlertV2#threshold}. |

---

##### `comparison_operator`<sup>Optional</sup> <a name="comparison_operator" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#comparison_operator DataDatabricksAlertV2#comparison_operator}.

---

##### `empty_result_state`<sup>Optional</sup> <a name="empty_result_state" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.emptyResultState"></a>

```python
empty_result_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#empty_result_state DataDatabricksAlertV2#empty_result_state}.

---

##### `notification`<sup>Optional</sup> <a name="notification" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.notification"></a>

```python
notification: DataDatabricksAlertV2EvaluationNotification
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification">DataDatabricksAlertV2EvaluationNotification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#notification DataDatabricksAlertV2#notification}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.source"></a>

```python
source: DataDatabricksAlertV2EvaluationSource
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource">DataDatabricksAlertV2EvaluationSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#source DataDatabricksAlertV2#source}.

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.threshold"></a>

```python
threshold: DataDatabricksAlertV2EvaluationThreshold
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold">DataDatabricksAlertV2EvaluationThreshold</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#threshold DataDatabricksAlertV2#threshold}.

---

### DataDatabricksAlertV2EvaluationNotification <a name="DataDatabricksAlertV2EvaluationNotification" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alert_v2

dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification(
  notify_on_ok: typing.Union[bool, IResolvable] = None,
  retrigger_seconds: typing.Union[int, float] = None,
  subscriptions: typing.Union[IResolvable, typing.List[DataDatabricksAlertV2EvaluationNotificationSubscriptions]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.property.notifyOnOk">notify_on_ok</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#notify_on_ok DataDatabricksAlertV2#notify_on_ok}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.property.retriggerSeconds">retrigger_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#retrigger_seconds DataDatabricksAlertV2#retrigger_seconds}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.property.subscriptions">subscriptions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions">DataDatabricksAlertV2EvaluationNotificationSubscriptions</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#subscriptions DataDatabricksAlertV2#subscriptions}. |

---

##### `notify_on_ok`<sup>Optional</sup> <a name="notify_on_ok" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.property.notifyOnOk"></a>

```python
notify_on_ok: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#notify_on_ok DataDatabricksAlertV2#notify_on_ok}.

---

##### `retrigger_seconds`<sup>Optional</sup> <a name="retrigger_seconds" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.property.retriggerSeconds"></a>

```python
retrigger_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#retrigger_seconds DataDatabricksAlertV2#retrigger_seconds}.

---

##### `subscriptions`<sup>Optional</sup> <a name="subscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.property.subscriptions"></a>

```python
subscriptions: typing.Union[IResolvable, typing.List[DataDatabricksAlertV2EvaluationNotificationSubscriptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions">DataDatabricksAlertV2EvaluationNotificationSubscriptions</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#subscriptions DataDatabricksAlertV2#subscriptions}.

---

### DataDatabricksAlertV2EvaluationNotificationSubscriptions <a name="DataDatabricksAlertV2EvaluationNotificationSubscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alert_v2

dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions(
  destination_id: str = None,
  user_email: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions.property.destinationId">destination_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#destination_id DataDatabricksAlertV2#destination_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions.property.userEmail">user_email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#user_email DataDatabricksAlertV2#user_email}. |

---

##### `destination_id`<sup>Optional</sup> <a name="destination_id" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions.property.destinationId"></a>

```python
destination_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#destination_id DataDatabricksAlertV2#destination_id}.

---

##### `user_email`<sup>Optional</sup> <a name="user_email" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions.property.userEmail"></a>

```python
user_email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#user_email DataDatabricksAlertV2#user_email}.

---

### DataDatabricksAlertV2EvaluationSource <a name="DataDatabricksAlertV2EvaluationSource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alert_v2

dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource(
  aggregation: str = None,
  display: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.property.aggregation">aggregation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#aggregation DataDatabricksAlertV2#aggregation}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.property.display">display</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#display DataDatabricksAlertV2#display}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#name DataDatabricksAlertV2#name}. |

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#aggregation DataDatabricksAlertV2#aggregation}.

---

##### `display`<sup>Optional</sup> <a name="display" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.property.display"></a>

```python
display: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#display DataDatabricksAlertV2#display}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#name DataDatabricksAlertV2#name}.

---

### DataDatabricksAlertV2EvaluationThreshold <a name="DataDatabricksAlertV2EvaluationThreshold" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alert_v2

dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold(
  column: DataDatabricksAlertV2EvaluationThresholdColumn = None,
  value: DataDatabricksAlertV2EvaluationThresholdValue = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold.property.column">column</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn">DataDatabricksAlertV2EvaluationThresholdColumn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#column DataDatabricksAlertV2#column}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold.property.value">value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue">DataDatabricksAlertV2EvaluationThresholdValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#value DataDatabricksAlertV2#value}. |

---

##### `column`<sup>Optional</sup> <a name="column" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold.property.column"></a>

```python
column: DataDatabricksAlertV2EvaluationThresholdColumn
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn">DataDatabricksAlertV2EvaluationThresholdColumn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#column DataDatabricksAlertV2#column}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold.property.value"></a>

```python
value: DataDatabricksAlertV2EvaluationThresholdValue
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue">DataDatabricksAlertV2EvaluationThresholdValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#value DataDatabricksAlertV2#value}.

---

### DataDatabricksAlertV2EvaluationThresholdColumn <a name="DataDatabricksAlertV2EvaluationThresholdColumn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alert_v2

dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn(
  aggregation: str = None,
  display: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.property.aggregation">aggregation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#aggregation DataDatabricksAlertV2#aggregation}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.property.display">display</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#display DataDatabricksAlertV2#display}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#name DataDatabricksAlertV2#name}. |

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#aggregation DataDatabricksAlertV2#aggregation}.

---

##### `display`<sup>Optional</sup> <a name="display" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.property.display"></a>

```python
display: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#display DataDatabricksAlertV2#display}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#name DataDatabricksAlertV2#name}.

---

### DataDatabricksAlertV2EvaluationThresholdValue <a name="DataDatabricksAlertV2EvaluationThresholdValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alert_v2

dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue(
  bool_value: typing.Union[bool, IResolvable] = None,
  double_value: typing.Union[int, float] = None,
  string_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.property.boolValue">bool_value</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#bool_value DataDatabricksAlertV2#bool_value}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.property.doubleValue">double_value</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#double_value DataDatabricksAlertV2#double_value}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.property.stringValue">string_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#string_value DataDatabricksAlertV2#string_value}. |

---

##### `bool_value`<sup>Optional</sup> <a name="bool_value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.property.boolValue"></a>

```python
bool_value: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#bool_value DataDatabricksAlertV2#bool_value}.

---

##### `double_value`<sup>Optional</sup> <a name="double_value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.property.doubleValue"></a>

```python
double_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#double_value DataDatabricksAlertV2#double_value}.

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#string_value DataDatabricksAlertV2#string_value}.

---

### DataDatabricksAlertV2RunAs <a name="DataDatabricksAlertV2RunAs" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alert_v2

dataDatabricksAlertV2.DataDatabricksAlertV2RunAs(
  service_principal_name: str = None,
  user_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs.property.servicePrincipalName">service_principal_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#service_principal_name DataDatabricksAlertV2#service_principal_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#user_name DataDatabricksAlertV2#user_name}. |

---

##### `service_principal_name`<sup>Optional</sup> <a name="service_principal_name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs.property.servicePrincipalName"></a>

```python
service_principal_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#service_principal_name DataDatabricksAlertV2#service_principal_name}.

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#user_name DataDatabricksAlertV2#user_name}.

---

### DataDatabricksAlertV2Schedule <a name="DataDatabricksAlertV2Schedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alert_v2

dataDatabricksAlertV2.DataDatabricksAlertV2Schedule(
  pause_status: str = None,
  quartz_cron_schedule: str = None,
  timezone_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.property.pauseStatus">pause_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#pause_status DataDatabricksAlertV2#pause_status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.property.quartzCronSchedule">quartz_cron_schedule</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#quartz_cron_schedule DataDatabricksAlertV2#quartz_cron_schedule}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.property.timezoneId">timezone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#timezone_id DataDatabricksAlertV2#timezone_id}. |

---

##### `pause_status`<sup>Optional</sup> <a name="pause_status" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.property.pauseStatus"></a>

```python
pause_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#pause_status DataDatabricksAlertV2#pause_status}.

---

##### `quartz_cron_schedule`<sup>Optional</sup> <a name="quartz_cron_schedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.property.quartzCronSchedule"></a>

```python
quartz_cron_schedule: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#quartz_cron_schedule DataDatabricksAlertV2#quartz_cron_schedule}.

---

##### `timezone_id`<sup>Optional</sup> <a name="timezone_id" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.property.timezoneId"></a>

```python
timezone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#timezone_id DataDatabricksAlertV2#timezone_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAlertV2EffectiveRunAsOutputReference <a name="DataDatabricksAlertV2EffectiveRunAsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alert_v2

dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.resetServicePrincipalName">reset_service_principal_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.resetUserName">reset_user_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_service_principal_name` <a name="reset_service_principal_name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.resetServicePrincipalName"></a>

```python
def reset_service_principal_name() -> None
```

##### `reset_user_name` <a name="reset_user_name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.resetUserName"></a>

```python
def reset_user_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.servicePrincipalNameInput">service_principal_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.servicePrincipalName">service_principal_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs">DataDatabricksAlertV2EffectiveRunAs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_principal_name_input`<sup>Optional</sup> <a name="service_principal_name_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.servicePrincipalNameInput"></a>

```python
service_principal_name_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `service_principal_name`<sup>Required</sup> <a name="service_principal_name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.servicePrincipalName"></a>

```python
service_principal_name: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksAlertV2EffectiveRunAs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EffectiveRunAs">DataDatabricksAlertV2EffectiveRunAs</a>

---


### DataDatabricksAlertV2EvaluationNotificationOutputReference <a name="DataDatabricksAlertV2EvaluationNotificationOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alert_v2

dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.putSubscriptions">put_subscriptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resetNotifyOnOk">reset_notify_on_ok</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resetRetriggerSeconds">reset_retrigger_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resetSubscriptions">reset_subscriptions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_subscriptions` <a name="put_subscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.putSubscriptions"></a>

```python
def put_subscriptions(
  value: typing.Union[IResolvable, typing.List[DataDatabricksAlertV2EvaluationNotificationSubscriptions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.putSubscriptions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions">DataDatabricksAlertV2EvaluationNotificationSubscriptions</a>]]

---

##### `reset_notify_on_ok` <a name="reset_notify_on_ok" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resetNotifyOnOk"></a>

```python
def reset_notify_on_ok() -> None
```

##### `reset_retrigger_seconds` <a name="reset_retrigger_seconds" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resetRetriggerSeconds"></a>

```python
def reset_retrigger_seconds() -> None
```

##### `reset_subscriptions` <a name="reset_subscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resetSubscriptions"></a>

```python
def reset_subscriptions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.subscriptions">subscriptions</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList">DataDatabricksAlertV2EvaluationNotificationSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.notifyOnOkInput">notify_on_ok_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.retriggerSecondsInput">retrigger_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.subscriptionsInput">subscriptions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions">DataDatabricksAlertV2EvaluationNotificationSubscriptions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.notifyOnOk">notify_on_ok</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.retriggerSeconds">retrigger_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification">DataDatabricksAlertV2EvaluationNotification</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subscriptions`<sup>Required</sup> <a name="subscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.subscriptions"></a>

```python
subscriptions: DataDatabricksAlertV2EvaluationNotificationSubscriptionsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList">DataDatabricksAlertV2EvaluationNotificationSubscriptionsList</a>

---

##### `notify_on_ok_input`<sup>Optional</sup> <a name="notify_on_ok_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.notifyOnOkInput"></a>

```python
notify_on_ok_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retrigger_seconds_input`<sup>Optional</sup> <a name="retrigger_seconds_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.retriggerSecondsInput"></a>

```python
retrigger_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subscriptions_input`<sup>Optional</sup> <a name="subscriptions_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.subscriptionsInput"></a>

```python
subscriptions_input: typing.Union[IResolvable, typing.List[DataDatabricksAlertV2EvaluationNotificationSubscriptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions">DataDatabricksAlertV2EvaluationNotificationSubscriptions</a>]]

---

##### `notify_on_ok`<sup>Required</sup> <a name="notify_on_ok" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.notifyOnOk"></a>

```python
notify_on_ok: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retrigger_seconds`<sup>Required</sup> <a name="retrigger_seconds" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.retriggerSeconds"></a>

```python
retrigger_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksAlertV2EvaluationNotification]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification">DataDatabricksAlertV2EvaluationNotification</a>]

---


### DataDatabricksAlertV2EvaluationNotificationSubscriptionsList <a name="DataDatabricksAlertV2EvaluationNotificationSubscriptionsList" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alert_v2

dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions">DataDatabricksAlertV2EvaluationNotificationSubscriptions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksAlertV2EvaluationNotificationSubscriptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions">DataDatabricksAlertV2EvaluationNotificationSubscriptions</a>]]

---


### DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference <a name="DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alert_v2

dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resetDestinationId">reset_destination_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resetUserEmail">reset_user_email</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_destination_id` <a name="reset_destination_id" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resetDestinationId"></a>

```python
def reset_destination_id() -> None
```

##### `reset_user_email` <a name="reset_user_email" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resetUserEmail"></a>

```python
def reset_user_email() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.destinationIdInput">destination_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.userEmailInput">user_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.destinationId">destination_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.userEmail">user_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions">DataDatabricksAlertV2EvaluationNotificationSubscriptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_id_input`<sup>Optional</sup> <a name="destination_id_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.destinationIdInput"></a>

```python
destination_id_input: str
```

- *Type:* str

---

##### `user_email_input`<sup>Optional</sup> <a name="user_email_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.userEmailInput"></a>

```python
user_email_input: str
```

- *Type:* str

---

##### `destination_id`<sup>Required</sup> <a name="destination_id" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.destinationId"></a>

```python
destination_id: str
```

- *Type:* str

---

##### `user_email`<sup>Required</sup> <a name="user_email" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.userEmail"></a>

```python
user_email: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksAlertV2EvaluationNotificationSubscriptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions">DataDatabricksAlertV2EvaluationNotificationSubscriptions</a>]

---


### DataDatabricksAlertV2EvaluationOutputReference <a name="DataDatabricksAlertV2EvaluationOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alert_v2

dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putNotification">put_notification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putThreshold">put_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetComparisonOperator">reset_comparison_operator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetEmptyResultState">reset_empty_result_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetNotification">reset_notification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetThreshold">reset_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_notification` <a name="put_notification" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putNotification"></a>

```python
def put_notification(
  notify_on_ok: typing.Union[bool, IResolvable] = None,
  retrigger_seconds: typing.Union[int, float] = None,
  subscriptions: typing.Union[IResolvable, typing.List[DataDatabricksAlertV2EvaluationNotificationSubscriptions]] = None
) -> None
```

###### `notify_on_ok`<sup>Optional</sup> <a name="notify_on_ok" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putNotification.parameter.notifyOnOk"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#notify_on_ok DataDatabricksAlertV2#notify_on_ok}.

---

###### `retrigger_seconds`<sup>Optional</sup> <a name="retrigger_seconds" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putNotification.parameter.retriggerSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#retrigger_seconds DataDatabricksAlertV2#retrigger_seconds}.

---

###### `subscriptions`<sup>Optional</sup> <a name="subscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putNotification.parameter.subscriptions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions">DataDatabricksAlertV2EvaluationNotificationSubscriptions</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#subscriptions DataDatabricksAlertV2#subscriptions}.

---

##### `put_source` <a name="put_source" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putSource"></a>

```python
def put_source(
  aggregation: str = None,
  display: str = None,
  name: str = None
) -> None
```

###### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putSource.parameter.aggregation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#aggregation DataDatabricksAlertV2#aggregation}.

---

###### `display`<sup>Optional</sup> <a name="display" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putSource.parameter.display"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#display DataDatabricksAlertV2#display}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putSource.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#name DataDatabricksAlertV2#name}.

---

##### `put_threshold` <a name="put_threshold" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putThreshold"></a>

```python
def put_threshold(
  column: DataDatabricksAlertV2EvaluationThresholdColumn = None,
  value: DataDatabricksAlertV2EvaluationThresholdValue = None
) -> None
```

###### `column`<sup>Optional</sup> <a name="column" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putThreshold.parameter.column"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn">DataDatabricksAlertV2EvaluationThresholdColumn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#column DataDatabricksAlertV2#column}.

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue">DataDatabricksAlertV2EvaluationThresholdValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#value DataDatabricksAlertV2#value}.

---

##### `reset_comparison_operator` <a name="reset_comparison_operator" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetComparisonOperator"></a>

```python
def reset_comparison_operator() -> None
```

##### `reset_empty_result_state` <a name="reset_empty_result_state" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetEmptyResultState"></a>

```python
def reset_empty_result_state() -> None
```

##### `reset_notification` <a name="reset_notification" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetNotification"></a>

```python
def reset_notification() -> None
```

##### `reset_source` <a name="reset_source" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_threshold` <a name="reset_threshold" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetThreshold"></a>

```python
def reset_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.lastEvaluatedAt">last_evaluated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.notification">notification</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference">DataDatabricksAlertV2EvaluationNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.source">source</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference">DataDatabricksAlertV2EvaluationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.threshold">threshold</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference">DataDatabricksAlertV2EvaluationThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.comparisonOperatorInput">comparison_operator_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.emptyResultStateInput">empty_result_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.notificationInput">notification_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification">DataDatabricksAlertV2EvaluationNotification</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.sourceInput">source_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource">DataDatabricksAlertV2EvaluationSource</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.thresholdInput">threshold_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold">DataDatabricksAlertV2EvaluationThreshold</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.emptyResultState">empty_result_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation">DataDatabricksAlertV2Evaluation</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_evaluated_at`<sup>Required</sup> <a name="last_evaluated_at" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.lastEvaluatedAt"></a>

```python
last_evaluated_at: str
```

- *Type:* str

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.notification"></a>

```python
notification: DataDatabricksAlertV2EvaluationNotificationOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference">DataDatabricksAlertV2EvaluationNotificationOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.source"></a>

```python
source: DataDatabricksAlertV2EvaluationSourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference">DataDatabricksAlertV2EvaluationSourceOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.threshold"></a>

```python
threshold: DataDatabricksAlertV2EvaluationThresholdOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference">DataDatabricksAlertV2EvaluationThresholdOutputReference</a>

---

##### `comparison_operator_input`<sup>Optional</sup> <a name="comparison_operator_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.comparisonOperatorInput"></a>

```python
comparison_operator_input: str
```

- *Type:* str

---

##### `empty_result_state_input`<sup>Optional</sup> <a name="empty_result_state_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.emptyResultStateInput"></a>

```python
empty_result_state_input: str
```

- *Type:* str

---

##### `notification_input`<sup>Optional</sup> <a name="notification_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.notificationInput"></a>

```python
notification_input: typing.Union[IResolvable, DataDatabricksAlertV2EvaluationNotification]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification">DataDatabricksAlertV2EvaluationNotification</a>]

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.sourceInput"></a>

```python
source_input: typing.Union[IResolvable, DataDatabricksAlertV2EvaluationSource]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource">DataDatabricksAlertV2EvaluationSource</a>]

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.thresholdInput"></a>

```python
threshold_input: typing.Union[IResolvable, DataDatabricksAlertV2EvaluationThreshold]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold">DataDatabricksAlertV2EvaluationThreshold</a>]

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `empty_result_state`<sup>Required</sup> <a name="empty_result_state" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.emptyResultState"></a>

```python
empty_result_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksAlertV2Evaluation]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation">DataDatabricksAlertV2Evaluation</a>]

---


### DataDatabricksAlertV2EvaluationSourceOutputReference <a name="DataDatabricksAlertV2EvaluationSourceOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alert_v2

dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resetAggregation">reset_aggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resetDisplay">reset_display</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aggregation` <a name="reset_aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resetAggregation"></a>

```python
def reset_aggregation() -> None
```

##### `reset_display` <a name="reset_display" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resetDisplay"></a>

```python
def reset_display() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.aggregationInput">aggregation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.displayInput">display_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.aggregation">aggregation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource">DataDatabricksAlertV2EvaluationSource</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregation_input`<sup>Optional</sup> <a name="aggregation_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.aggregationInput"></a>

```python
aggregation_input: str
```

- *Type:* str

---

##### `display_input`<sup>Optional</sup> <a name="display_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.displayInput"></a>

```python
display_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksAlertV2EvaluationSource]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource">DataDatabricksAlertV2EvaluationSource</a>]

---


### DataDatabricksAlertV2EvaluationThresholdColumnOutputReference <a name="DataDatabricksAlertV2EvaluationThresholdColumnOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alert_v2

dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resetAggregation">reset_aggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resetDisplay">reset_display</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resetName">reset_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_aggregation` <a name="reset_aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resetAggregation"></a>

```python
def reset_aggregation() -> None
```

##### `reset_display` <a name="reset_display" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resetDisplay"></a>

```python
def reset_display() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resetName"></a>

```python
def reset_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.aggregationInput">aggregation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.displayInput">display_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.aggregation">aggregation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.display">display</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn">DataDatabricksAlertV2EvaluationThresholdColumn</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregation_input`<sup>Optional</sup> <a name="aggregation_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.aggregationInput"></a>

```python
aggregation_input: str
```

- *Type:* str

---

##### `display_input`<sup>Optional</sup> <a name="display_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.displayInput"></a>

```python
display_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

---

##### `display`<sup>Required</sup> <a name="display" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.display"></a>

```python
display: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksAlertV2EvaluationThresholdColumn]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn">DataDatabricksAlertV2EvaluationThresholdColumn</a>]

---


### DataDatabricksAlertV2EvaluationThresholdOutputReference <a name="DataDatabricksAlertV2EvaluationThresholdOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alert_v2

dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putColumn">put_column</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putValue">put_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resetColumn">reset_column</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_column` <a name="put_column" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putColumn"></a>

```python
def put_column(
  aggregation: str = None,
  display: str = None,
  name: str = None
) -> None
```

###### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putColumn.parameter.aggregation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#aggregation DataDatabricksAlertV2#aggregation}.

---

###### `display`<sup>Optional</sup> <a name="display" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putColumn.parameter.display"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#display DataDatabricksAlertV2#display}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putColumn.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#name DataDatabricksAlertV2#name}.

---

##### `put_value` <a name="put_value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putValue"></a>

```python
def put_value(
  bool_value: typing.Union[bool, IResolvable] = None,
  double_value: typing.Union[int, float] = None,
  string_value: str = None
) -> None
```

###### `bool_value`<sup>Optional</sup> <a name="bool_value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putValue.parameter.boolValue"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#bool_value DataDatabricksAlertV2#bool_value}.

---

###### `double_value`<sup>Optional</sup> <a name="double_value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putValue.parameter.doubleValue"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#double_value DataDatabricksAlertV2#double_value}.

---

###### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putValue.parameter.stringValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/alert_v2#string_value DataDatabricksAlertV2#string_value}.

---

##### `reset_column` <a name="reset_column" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resetColumn"></a>

```python
def reset_column() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.column">column</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference">DataDatabricksAlertV2EvaluationThresholdColumnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference">DataDatabricksAlertV2EvaluationThresholdValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.columnInput">column_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn">DataDatabricksAlertV2EvaluationThresholdColumn</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.valueInput">value_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue">DataDatabricksAlertV2EvaluationThresholdValue</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold">DataDatabricksAlertV2EvaluationThreshold</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.column"></a>

```python
column: DataDatabricksAlertV2EvaluationThresholdColumnOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference">DataDatabricksAlertV2EvaluationThresholdColumnOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.value"></a>

```python
value: DataDatabricksAlertV2EvaluationThresholdValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference">DataDatabricksAlertV2EvaluationThresholdValueOutputReference</a>

---

##### `column_input`<sup>Optional</sup> <a name="column_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.columnInput"></a>

```python
column_input: typing.Union[IResolvable, DataDatabricksAlertV2EvaluationThresholdColumn]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn">DataDatabricksAlertV2EvaluationThresholdColumn</a>]

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.valueInput"></a>

```python
value_input: typing.Union[IResolvable, DataDatabricksAlertV2EvaluationThresholdValue]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue">DataDatabricksAlertV2EvaluationThresholdValue</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksAlertV2EvaluationThreshold]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold">DataDatabricksAlertV2EvaluationThreshold</a>]

---


### DataDatabricksAlertV2EvaluationThresholdValueOutputReference <a name="DataDatabricksAlertV2EvaluationThresholdValueOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alert_v2

dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resetBoolValue">reset_bool_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resetDoubleValue">reset_double_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bool_value` <a name="reset_bool_value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resetBoolValue"></a>

```python
def reset_bool_value() -> None
```

##### `reset_double_value` <a name="reset_double_value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resetDoubleValue"></a>

```python
def reset_double_value() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.boolValueInput">bool_value_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.doubleValueInput">double_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.boolValue">bool_value</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.doubleValue">double_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue">DataDatabricksAlertV2EvaluationThresholdValue</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bool_value_input`<sup>Optional</sup> <a name="bool_value_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.boolValueInput"></a>

```python
bool_value_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `double_value_input`<sup>Optional</sup> <a name="double_value_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.doubleValueInput"></a>

```python
double_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `bool_value`<sup>Required</sup> <a name="bool_value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.boolValue"></a>

```python
bool_value: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `double_value`<sup>Required</sup> <a name="double_value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.doubleValue"></a>

```python
double_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksAlertV2EvaluationThresholdValue]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue">DataDatabricksAlertV2EvaluationThresholdValue</a>]

---


### DataDatabricksAlertV2RunAsOutputReference <a name="DataDatabricksAlertV2RunAsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alert_v2

dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.resetServicePrincipalName">reset_service_principal_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.resetUserName">reset_user_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_service_principal_name` <a name="reset_service_principal_name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.resetServicePrincipalName"></a>

```python
def reset_service_principal_name() -> None
```

##### `reset_user_name` <a name="reset_user_name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.resetUserName"></a>

```python
def reset_user_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.servicePrincipalNameInput">service_principal_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.servicePrincipalName">service_principal_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs">DataDatabricksAlertV2RunAs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `service_principal_name_input`<sup>Optional</sup> <a name="service_principal_name_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.servicePrincipalNameInput"></a>

```python
service_principal_name_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `service_principal_name`<sup>Required</sup> <a name="service_principal_name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.servicePrincipalName"></a>

```python
service_principal_name: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksAlertV2RunAs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2RunAs">DataDatabricksAlertV2RunAs</a>]

---


### DataDatabricksAlertV2ScheduleOutputReference <a name="DataDatabricksAlertV2ScheduleOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_alert_v2

dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resetPauseStatus">reset_pause_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resetQuartzCronSchedule">reset_quartz_cron_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resetTimezoneId">reset_timezone_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_pause_status` <a name="reset_pause_status" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resetPauseStatus"></a>

```python
def reset_pause_status() -> None
```

##### `reset_quartz_cron_schedule` <a name="reset_quartz_cron_schedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resetQuartzCronSchedule"></a>

```python
def reset_quartz_cron_schedule() -> None
```

##### `reset_timezone_id` <a name="reset_timezone_id" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resetTimezoneId"></a>

```python
def reset_timezone_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.pauseStatusInput">pause_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.quartzCronScheduleInput">quartz_cron_schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.timezoneIdInput">timezone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.pauseStatus">pause_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.quartzCronSchedule">quartz_cron_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.timezoneId">timezone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule">DataDatabricksAlertV2Schedule</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pause_status_input`<sup>Optional</sup> <a name="pause_status_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.pauseStatusInput"></a>

```python
pause_status_input: str
```

- *Type:* str

---

##### `quartz_cron_schedule_input`<sup>Optional</sup> <a name="quartz_cron_schedule_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.quartzCronScheduleInput"></a>

```python
quartz_cron_schedule_input: str
```

- *Type:* str

---

##### `timezone_id_input`<sup>Optional</sup> <a name="timezone_id_input" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.timezoneIdInput"></a>

```python
timezone_id_input: str
```

- *Type:* str

---

##### `pause_status`<sup>Required</sup> <a name="pause_status" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.pauseStatus"></a>

```python
pause_status: str
```

- *Type:* str

---

##### `quartz_cron_schedule`<sup>Required</sup> <a name="quartz_cron_schedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.quartzCronSchedule"></a>

```python
quartz_cron_schedule: str
```

- *Type:* str

---

##### `timezone_id`<sup>Required</sup> <a name="timezone_id" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.timezoneId"></a>

```python
timezone_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksAlertV2Schedule]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule">DataDatabricksAlertV2Schedule</a>]

---



