# `dataDatabricksDataQualityRefresh` Submodule <a name="`dataDatabricksDataQualityRefresh` Submodule" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDataQualityRefresh <a name="DataDatabricksDataQualityRefresh" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/data_quality_refresh databricks_data_quality_refresh}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_refresh

dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh(
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
  object_type: str,
  refresh_id: typing.Union[int, float]
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/data_quality_refresh#object_id DataDatabricksDataQualityRefresh#object_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.objectType">object_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/data_quality_refresh#object_type DataDatabricksDataQualityRefresh#object_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.refreshId">refresh_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/data_quality_refresh#refresh_id DataDatabricksDataQualityRefresh#refresh_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.objectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/data_quality_refresh#object_id DataDatabricksDataQualityRefresh#object_id}.

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.objectType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/data_quality_refresh#object_type DataDatabricksDataQualityRefresh#object_type}.

---

##### `refresh_id`<sup>Required</sup> <a name="refresh_id" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.Initializer.parameter.refreshId"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/data_quality_refresh#refresh_id DataDatabricksDataQualityRefresh#refresh_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksDataQualityRefresh resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_refresh

dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_refresh

dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_refresh

dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_refresh

dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksDataQualityRefresh resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksDataQualityRefresh to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksDataQualityRefresh that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/data_quality_refresh#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksDataQualityRefresh to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.endTimeMs">end_time_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.startTimeMs">start_time_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.trigger">trigger</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.objectIdInput">object_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.objectTypeInput">object_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.refreshIdInput">refresh_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.objectId">object_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.refreshId">refresh_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `end_time_ms`<sup>Required</sup> <a name="end_time_ms" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.endTimeMs"></a>

```python
end_time_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `start_time_ms`<sup>Required</sup> <a name="start_time_ms" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.startTimeMs"></a>

```python
start_time_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.trigger"></a>

```python
trigger: str
```

- *Type:* str

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.objectIdInput"></a>

```python
object_id_input: str
```

- *Type:* str

---

##### `object_type_input`<sup>Optional</sup> <a name="object_type_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.objectTypeInput"></a>

```python
object_type_input: str
```

- *Type:* str

---

##### `refresh_id_input`<sup>Optional</sup> <a name="refresh_id_input" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.refreshIdInput"></a>

```python
refresh_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `refresh_id`<sup>Required</sup> <a name="refresh_id" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.refreshId"></a>

```python
refresh_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefresh.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDataQualityRefreshConfig <a name="DataDatabricksDataQualityRefreshConfig" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_data_quality_refresh

dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  object_id: str,
  object_type: str,
  refresh_id: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.objectId">object_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/data_quality_refresh#object_id DataDatabricksDataQualityRefresh#object_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.objectType">object_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/data_quality_refresh#object_type DataDatabricksDataQualityRefresh#object_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.refreshId">refresh_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/data_quality_refresh#refresh_id DataDatabricksDataQualityRefresh#refresh_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.objectId"></a>

```python
object_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/data_quality_refresh#object_id DataDatabricksDataQualityRefresh#object_id}.

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/data_quality_refresh#object_type DataDatabricksDataQualityRefresh#object_type}.

---

##### `refresh_id`<sup>Required</sup> <a name="refresh_id" id="@cdktf/provider-databricks.dataDatabricksDataQualityRefresh.DataDatabricksDataQualityRefreshConfig.property.refreshId"></a>

```python
refresh_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/data_quality_refresh#refresh_id DataDatabricksDataQualityRefresh#refresh_id}.

---



