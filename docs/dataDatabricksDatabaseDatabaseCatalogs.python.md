# `dataDatabricksDatabaseDatabaseCatalogs` Submodule <a name="`dataDatabricksDatabaseDatabaseCatalogs` Submodule" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDatabaseDatabaseCatalogs <a name="DataDatabricksDatabaseDatabaseCatalogs" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/database_database_catalogs databricks_database_database_catalogs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_database_catalogs

dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_name: str,
  page_size: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.instanceName">instance_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/database_database_catalogs#instance_name DataDatabricksDatabaseDatabaseCatalogs#instance_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/database_database_catalogs#page_size DataDatabricksDatabaseDatabaseCatalogs#page_size}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.instanceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/database_database_catalogs#instance_name DataDatabricksDatabaseDatabaseCatalogs#instance_name}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.pageSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/database_database_catalogs#page_size DataDatabricksDatabaseDatabaseCatalogs#page_size}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.resetPageSize">reset_page_size</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_page_size` <a name="reset_page_size" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.resetPageSize"></a>

```python
def reset_page_size() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksDatabaseDatabaseCatalogs resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_database_catalogs

dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_database_catalogs

dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_database_catalogs

dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_database_catalogs

dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksDatabaseDatabaseCatalogs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksDatabaseDatabaseCatalogs to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksDatabaseDatabaseCatalogs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/database_database_catalogs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksDatabaseDatabaseCatalogs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.databaseCatalogs">database_catalogs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList">DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.instanceNameInput">instance_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.pageSizeInput">page_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.instanceName">instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `database_catalogs`<sup>Required</sup> <a name="database_catalogs" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.databaseCatalogs"></a>

```python
database_catalogs: DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList">DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList</a>

---

##### `instance_name_input`<sup>Optional</sup> <a name="instance_name_input" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.instanceNameInput"></a>

```python
instance_name_input: str
```

- *Type:* str

---

##### `page_size_input`<sup>Optional</sup> <a name="page_size_input" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.pageSizeInput"></a>

```python
page_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

---

##### `page_size`<sup>Required</sup> <a name="page_size" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDatabaseDatabaseCatalogsConfig <a name="DataDatabricksDatabaseDatabaseCatalogsConfig" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_database_catalogs

dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  instance_name: str,
  page_size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.instanceName">instance_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/database_database_catalogs#instance_name DataDatabricksDatabaseDatabaseCatalogs#instance_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.pageSize">page_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/database_database_catalogs#page_size DataDatabricksDatabaseDatabaseCatalogs#page_size}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/database_database_catalogs#instance_name DataDatabricksDatabaseDatabaseCatalogs#instance_name}.

---

##### `page_size`<sup>Optional</sup> <a name="page_size" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.pageSize"></a>

```python
page_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/database_database_catalogs#page_size DataDatabricksDatabaseDatabaseCatalogs#page_size}.

---

### DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs <a name="DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_database_catalogs

dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/database_database_catalogs#name DataDatabricksDatabaseDatabaseCatalogs#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/data-sources/database_database_catalogs#name DataDatabricksDatabaseDatabaseCatalogs#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList <a name="DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_database_catalogs

dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs">DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs">DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs</a>]

---


### DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference <a name="DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_database_database_catalogs

dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.createDatabaseIfNotExists">create_database_if_not_exists</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.databaseInstanceName">database_instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs">DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_database_if_not_exists`<sup>Required</sup> <a name="create_database_if_not_exists" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.createDatabaseIfNotExists"></a>

```python
create_database_if_not_exists: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `database_instance_name`<sup>Required</sup> <a name="database_instance_name" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.databaseInstanceName"></a>

```python
database_instance_name: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs">DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs</a>

---



