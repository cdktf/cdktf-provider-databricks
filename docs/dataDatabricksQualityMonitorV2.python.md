# `dataDatabricksQualityMonitorV2` Submodule <a name="`dataDatabricksQualityMonitorV2` Submodule" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksQualityMonitorV2 <a name="DataDatabricksQualityMonitorV2" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/quality_monitor_v2 databricks_quality_monitor_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_quality_monitor_v2

dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  object_id: str,
  object_type: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/quality_monitor_v2#object_id DataDatabricksQualityMonitorV2#object_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.objectType">object_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/quality_monitor_v2#object_type DataDatabricksQualityMonitorV2#object_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.objectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/quality_monitor_v2#object_id DataDatabricksQualityMonitorV2#object_id}.

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.Initializer.parameter.objectType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/quality_monitor_v2#object_type DataDatabricksQualityMonitorV2#object_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksQualityMonitorV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_quality_monitor_v2

dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_quality_monitor_v2

dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_quality_monitor_v2

dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_quality_monitor_v2

dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksQualityMonitorV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksQualityMonitorV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksQualityMonitorV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/quality_monitor_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksQualityMonitorV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.anomalyDetectionConfig">anomaly_detection_config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference">DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectIdInput">object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectTypeInput">object_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `anomaly_detection_config`<sup>Required</sup> <a name="anomaly_detection_config" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.anomalyDetectionConfig"></a>

```python
anomaly_detection_config: DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference">DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference</a>

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectIdInput"></a>

```python
object_id_input: str
```

- *Type:* str

---

##### `object_type_input`<sup>Optional</sup> <a name="object_type_input" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectTypeInput"></a>

```python
object_type_input: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksQualityMonitorV2AnomalyDetectionConfig <a name="DataDatabricksQualityMonitorV2AnomalyDetectionConfig" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_quality_monitor_v2

dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfig()
```


### DataDatabricksQualityMonitorV2Config <a name="DataDatabricksQualityMonitorV2Config" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_quality_monitor_v2

dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  object_id: str,
  object_type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/quality_monitor_v2#object_id DataDatabricksQualityMonitorV2#object_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.objectType">object_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/quality_monitor_v2#object_type DataDatabricksQualityMonitorV2#object_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/quality_monitor_v2#object_id DataDatabricksQualityMonitorV2#object_id}.

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2Config.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.93.0/docs/data-sources/quality_monitor_v2#object_type DataDatabricksQualityMonitorV2#object_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference <a name="DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_quality_monitor_v2

dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.lastRunId">last_run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.latestRunStatus">latest_run_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfig">DataDatabricksQualityMonitorV2AnomalyDetectionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_run_id`<sup>Required</sup> <a name="last_run_id" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.lastRunId"></a>

```python
last_run_id: str
```

- *Type:* str

---

##### `latest_run_status`<sup>Required</sup> <a name="latest_run_status" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.latestRunStatus"></a>

```python
latest_run_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksQualityMonitorV2AnomalyDetectionConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorV2.DataDatabricksQualityMonitorV2AnomalyDetectionConfig">DataDatabricksQualityMonitorV2AnomalyDetectionConfig</a>

---



