# `dataDatabricksFunctions` Submodule <a name="`dataDatabricksFunctions` Submodule" id="@cdktf/provider-databricks.dataDatabricksFunctions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksFunctions <a name="DataDatabricksFunctions" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions databricks_functions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctions(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  catalog_name: str,
  schema_name: str,
  functions: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctions]] = None,
  include_browse: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#catalog_name DataDatabricksFunctions#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#schema_name DataDatabricksFunctions#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.functions">functions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions">DataDatabricksFunctionsFunctions</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#functions DataDatabricksFunctions#functions}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.includeBrowse">include_browse</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#include_browse DataDatabricksFunctions#include_browse}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.catalogName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#catalog_name DataDatabricksFunctions#catalog_name}.

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.schemaName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#schema_name DataDatabricksFunctions#schema_name}.

---

##### `functions`<sup>Optional</sup> <a name="functions" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.functions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions">DataDatabricksFunctionsFunctions</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#functions DataDatabricksFunctions#functions}.

---

##### `include_browse`<sup>Optional</sup> <a name="include_browse" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.Initializer.parameter.includeBrowse"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#include_browse DataDatabricksFunctions#include_browse}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.putFunctions">put_functions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.resetFunctions">reset_functions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.resetIncludeBrowse">reset_include_browse</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_functions` <a name="put_functions" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.putFunctions"></a>

```python
def put_functions(
  value: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.putFunctions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions">DataDatabricksFunctionsFunctions</a>]]

---

##### `reset_functions` <a name="reset_functions" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.resetFunctions"></a>

```python
def reset_functions() -> None
```

##### `reset_include_browse` <a name="reset_include_browse" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.resetIncludeBrowse"></a>

```python
def reset_include_browse() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksFunctions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksFunctions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksFunctions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksFunctions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksFunctions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.functions">functions</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList">DataDatabricksFunctionsFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.functionsInput">functions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions">DataDatabricksFunctionsFunctions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.includeBrowseInput">include_browse_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.includeBrowse">include_browse</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `functions`<sup>Required</sup> <a name="functions" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.functions"></a>

```python
functions: DataDatabricksFunctionsFunctionsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList">DataDatabricksFunctionsFunctionsList</a>

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `functions_input`<sup>Optional</sup> <a name="functions_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.functionsInput"></a>

```python
functions_input: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions">DataDatabricksFunctionsFunctions</a>]]

---

##### `include_browse_input`<sup>Optional</sup> <a name="include_browse_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.includeBrowseInput"></a>

```python
include_browse_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `include_browse`<sup>Required</sup> <a name="include_browse" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.includeBrowse"></a>

```python
include_browse: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksFunctionsConfig <a name="DataDatabricksFunctionsConfig" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  catalog_name: str,
  schema_name: str,
  functions: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctions]] = None,
  include_browse: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#catalog_name DataDatabricksFunctions#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#schema_name DataDatabricksFunctions#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.functions">functions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions">DataDatabricksFunctionsFunctions</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#functions DataDatabricksFunctions#functions}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.includeBrowse">include_browse</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#include_browse DataDatabricksFunctions#include_browse}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#catalog_name DataDatabricksFunctions#catalog_name}.

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#schema_name DataDatabricksFunctions#schema_name}.

---

##### `functions`<sup>Optional</sup> <a name="functions" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.functions"></a>

```python
functions: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions">DataDatabricksFunctionsFunctions</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#functions DataDatabricksFunctions#functions}.

---

##### `include_browse`<sup>Optional</sup> <a name="include_browse" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsConfig.property.includeBrowse"></a>

```python
include_browse: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#include_browse DataDatabricksFunctions#include_browse}.

---

### DataDatabricksFunctionsFunctions <a name="DataDatabricksFunctionsFunctions" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctions(
  browse_only: typing.Union[bool, IResolvable] = None,
  catalog_name: str = None,
  comment: str = None,
  created_at: typing.Union[int, float] = None,
  created_by: str = None,
  data_type: str = None,
  external_language: str = None,
  external_name: str = None,
  full_data_type: str = None,
  full_name: str = None,
  function_id: str = None,
  input_params: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsInputParams]] = None,
  is_deterministic: typing.Union[bool, IResolvable] = None,
  is_null_call: typing.Union[bool, IResolvable] = None,
  metastore_id: str = None,
  name: str = None,
  owner: str = None,
  parameter_style: str = None,
  properties: str = None,
  return_params: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsReturnParams]] = None,
  routine_body: str = None,
  routine_definition: str = None,
  routine_dependencies: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsRoutineDependencies]] = None,
  schema_name: str = None,
  security_type: str = None,
  specific_name: str = None,
  sql_data_access: str = None,
  sql_path: str = None,
  updated_at: typing.Union[int, float] = None,
  updated_by: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.browseOnly">browse_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#browse_only DataDatabricksFunctions#browse_only}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.catalogName">catalog_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#catalog_name DataDatabricksFunctions#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#comment DataDatabricksFunctions#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#created_at DataDatabricksFunctions#created_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.createdBy">created_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#created_by DataDatabricksFunctions#created_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.dataType">data_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#data_type DataDatabricksFunctions#data_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.externalLanguage">external_language</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#external_language DataDatabricksFunctions#external_language}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.externalName">external_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#external_name DataDatabricksFunctions#external_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.fullDataType">full_data_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#full_data_type DataDatabricksFunctions#full_data_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.fullName">full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#full_name DataDatabricksFunctions#full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.functionId">function_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#function_id DataDatabricksFunctions#function_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.inputParams">input_params</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams">DataDatabricksFunctionsFunctionsInputParams</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#input_params DataDatabricksFunctions#input_params}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.isDeterministic">is_deterministic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#is_deterministic DataDatabricksFunctions#is_deterministic}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.isNullCall">is_null_call</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#is_null_call DataDatabricksFunctions#is_null_call}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.metastoreId">metastore_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#metastore_id DataDatabricksFunctions#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#name DataDatabricksFunctions#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.owner">owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#owner DataDatabricksFunctions#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.parameterStyle">parameter_style</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#parameter_style DataDatabricksFunctions#parameter_style}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.properties">properties</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#properties DataDatabricksFunctions#properties}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.returnParams">return_params</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams">DataDatabricksFunctionsFunctionsReturnParams</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#return_params DataDatabricksFunctions#return_params}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.routineBody">routine_body</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#routine_body DataDatabricksFunctions#routine_body}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.routineDefinition">routine_definition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#routine_definition DataDatabricksFunctions#routine_definition}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.routineDependencies">routine_dependencies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies">DataDatabricksFunctionsFunctionsRoutineDependencies</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#routine_dependencies DataDatabricksFunctions#routine_dependencies}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.schemaName">schema_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#schema_name DataDatabricksFunctions#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.securityType">security_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#security_type DataDatabricksFunctions#security_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.specificName">specific_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#specific_name DataDatabricksFunctions#specific_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.sqlDataAccess">sql_data_access</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#sql_data_access DataDatabricksFunctions#sql_data_access}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.sqlPath">sql_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#sql_path DataDatabricksFunctions#sql_path}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.updatedAt">updated_at</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#updated_at DataDatabricksFunctions#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.updatedBy">updated_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#updated_by DataDatabricksFunctions#updated_by}. |

---

##### `browse_only`<sup>Optional</sup> <a name="browse_only" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.browseOnly"></a>

```python
browse_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#browse_only DataDatabricksFunctions#browse_only}.

---

##### `catalog_name`<sup>Optional</sup> <a name="catalog_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#catalog_name DataDatabricksFunctions#catalog_name}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#comment DataDatabricksFunctions#comment}.

---

##### `created_at`<sup>Optional</sup> <a name="created_at" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#created_at DataDatabricksFunctions#created_at}.

---

##### `created_by`<sup>Optional</sup> <a name="created_by" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#created_by DataDatabricksFunctions#created_by}.

---

##### `data_type`<sup>Optional</sup> <a name="data_type" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#data_type DataDatabricksFunctions#data_type}.

---

##### `external_language`<sup>Optional</sup> <a name="external_language" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.externalLanguage"></a>

```python
external_language: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#external_language DataDatabricksFunctions#external_language}.

---

##### `external_name`<sup>Optional</sup> <a name="external_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.externalName"></a>

```python
external_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#external_name DataDatabricksFunctions#external_name}.

---

##### `full_data_type`<sup>Optional</sup> <a name="full_data_type" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.fullDataType"></a>

```python
full_data_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#full_data_type DataDatabricksFunctions#full_data_type}.

---

##### `full_name`<sup>Optional</sup> <a name="full_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#full_name DataDatabricksFunctions#full_name}.

---

##### `function_id`<sup>Optional</sup> <a name="function_id" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.functionId"></a>

```python
function_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#function_id DataDatabricksFunctions#function_id}.

---

##### `input_params`<sup>Optional</sup> <a name="input_params" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.inputParams"></a>

```python
input_params: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsInputParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams">DataDatabricksFunctionsFunctionsInputParams</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#input_params DataDatabricksFunctions#input_params}.

---

##### `is_deterministic`<sup>Optional</sup> <a name="is_deterministic" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.isDeterministic"></a>

```python
is_deterministic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#is_deterministic DataDatabricksFunctions#is_deterministic}.

---

##### `is_null_call`<sup>Optional</sup> <a name="is_null_call" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.isNullCall"></a>

```python
is_null_call: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#is_null_call DataDatabricksFunctions#is_null_call}.

---

##### `metastore_id`<sup>Optional</sup> <a name="metastore_id" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#metastore_id DataDatabricksFunctions#metastore_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#name DataDatabricksFunctions#name}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.owner"></a>

```python
owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#owner DataDatabricksFunctions#owner}.

---

##### `parameter_style`<sup>Optional</sup> <a name="parameter_style" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.parameterStyle"></a>

```python
parameter_style: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#parameter_style DataDatabricksFunctions#parameter_style}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.properties"></a>

```python
properties: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#properties DataDatabricksFunctions#properties}.

---

##### `return_params`<sup>Optional</sup> <a name="return_params" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.returnParams"></a>

```python
return_params: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsReturnParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams">DataDatabricksFunctionsFunctionsReturnParams</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#return_params DataDatabricksFunctions#return_params}.

---

##### `routine_body`<sup>Optional</sup> <a name="routine_body" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.routineBody"></a>

```python
routine_body: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#routine_body DataDatabricksFunctions#routine_body}.

---

##### `routine_definition`<sup>Optional</sup> <a name="routine_definition" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.routineDefinition"></a>

```python
routine_definition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#routine_definition DataDatabricksFunctions#routine_definition}.

---

##### `routine_dependencies`<sup>Optional</sup> <a name="routine_dependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.routineDependencies"></a>

```python
routine_dependencies: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsRoutineDependencies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies">DataDatabricksFunctionsFunctionsRoutineDependencies</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#routine_dependencies DataDatabricksFunctions#routine_dependencies}.

---

##### `schema_name`<sup>Optional</sup> <a name="schema_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#schema_name DataDatabricksFunctions#schema_name}.

---

##### `security_type`<sup>Optional</sup> <a name="security_type" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.securityType"></a>

```python
security_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#security_type DataDatabricksFunctions#security_type}.

---

##### `specific_name`<sup>Optional</sup> <a name="specific_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.specificName"></a>

```python
specific_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#specific_name DataDatabricksFunctions#specific_name}.

---

##### `sql_data_access`<sup>Optional</sup> <a name="sql_data_access" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.sqlDataAccess"></a>

```python
sql_data_access: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#sql_data_access DataDatabricksFunctions#sql_data_access}.

---

##### `sql_path`<sup>Optional</sup> <a name="sql_path" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.sqlPath"></a>

```python
sql_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#sql_path DataDatabricksFunctions#sql_path}.

---

##### `updated_at`<sup>Optional</sup> <a name="updated_at" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.updatedAt"></a>

```python
updated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#updated_at DataDatabricksFunctions#updated_at}.

---

##### `updated_by`<sup>Optional</sup> <a name="updated_by" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#updated_by DataDatabricksFunctions#updated_by}.

---

### DataDatabricksFunctionsFunctionsInputParams <a name="DataDatabricksFunctionsFunctionsInputParams" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams(
  parameters: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsInputParamsParameters]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams.property.parameters">parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters">DataDatabricksFunctionsFunctionsInputParamsParameters</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#parameters DataDatabricksFunctions#parameters}. |

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams.property.parameters"></a>

```python
parameters: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsInputParamsParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters">DataDatabricksFunctionsFunctionsInputParamsParameters</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#parameters DataDatabricksFunctions#parameters}.

---

### DataDatabricksFunctionsFunctionsInputParamsParameters <a name="DataDatabricksFunctionsFunctionsInputParamsParameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters(
  name: str,
  position: typing.Union[int, float],
  type_name: str,
  type_text: str,
  comment: str = None,
  parameter_default: str = None,
  parameter_mode: str = None,
  parameter_type: str = None,
  type_interval_type: str = None,
  type_json: str = None,
  type_precision: typing.Union[int, float] = None,
  type_scale: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#name DataDatabricksFunctions#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.position">position</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#position DataDatabricksFunctions#position}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeName">type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#type_name DataDatabricksFunctions#type_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeText">type_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#type_text DataDatabricksFunctions#type_text}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#comment DataDatabricksFunctions#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.parameterDefault">parameter_default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#parameter_default DataDatabricksFunctions#parameter_default}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.parameterMode">parameter_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#parameter_mode DataDatabricksFunctions#parameter_mode}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.parameterType">parameter_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#parameter_type DataDatabricksFunctions#parameter_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeIntervalType">type_interval_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#type_interval_type DataDatabricksFunctions#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeJson">type_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#type_json DataDatabricksFunctions#type_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typePrecision">type_precision</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#type_precision DataDatabricksFunctions#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeScale">type_scale</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#type_scale DataDatabricksFunctions#type_scale}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#name DataDatabricksFunctions#name}.

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#position DataDatabricksFunctions#position}.

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#type_name DataDatabricksFunctions#type_name}.

---

##### `type_text`<sup>Required</sup> <a name="type_text" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeText"></a>

```python
type_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#type_text DataDatabricksFunctions#type_text}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#comment DataDatabricksFunctions#comment}.

---

##### `parameter_default`<sup>Optional</sup> <a name="parameter_default" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.parameterDefault"></a>

```python
parameter_default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#parameter_default DataDatabricksFunctions#parameter_default}.

---

##### `parameter_mode`<sup>Optional</sup> <a name="parameter_mode" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.parameterMode"></a>

```python
parameter_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#parameter_mode DataDatabricksFunctions#parameter_mode}.

---

##### `parameter_type`<sup>Optional</sup> <a name="parameter_type" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.parameterType"></a>

```python
parameter_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#parameter_type DataDatabricksFunctions#parameter_type}.

---

##### `type_interval_type`<sup>Optional</sup> <a name="type_interval_type" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeIntervalType"></a>

```python
type_interval_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#type_interval_type DataDatabricksFunctions#type_interval_type}.

---

##### `type_json`<sup>Optional</sup> <a name="type_json" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeJson"></a>

```python
type_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#type_json DataDatabricksFunctions#type_json}.

---

##### `type_precision`<sup>Optional</sup> <a name="type_precision" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typePrecision"></a>

```python
type_precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#type_precision DataDatabricksFunctions#type_precision}.

---

##### `type_scale`<sup>Optional</sup> <a name="type_scale" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters.property.typeScale"></a>

```python
type_scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#type_scale DataDatabricksFunctions#type_scale}.

---

### DataDatabricksFunctionsFunctionsReturnParams <a name="DataDatabricksFunctionsFunctionsReturnParams" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams(
  parameters: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsReturnParamsParameters]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams.property.parameters">parameters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters">DataDatabricksFunctionsFunctionsReturnParamsParameters</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#parameters DataDatabricksFunctions#parameters}. |

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams.property.parameters"></a>

```python
parameters: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsReturnParamsParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters">DataDatabricksFunctionsFunctionsReturnParamsParameters</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#parameters DataDatabricksFunctions#parameters}.

---

### DataDatabricksFunctionsFunctionsReturnParamsParameters <a name="DataDatabricksFunctionsFunctionsReturnParamsParameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters(
  name: str,
  position: typing.Union[int, float],
  type_name: str,
  type_text: str,
  comment: str = None,
  parameter_default: str = None,
  parameter_mode: str = None,
  parameter_type: str = None,
  type_interval_type: str = None,
  type_json: str = None,
  type_precision: typing.Union[int, float] = None,
  type_scale: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#name DataDatabricksFunctions#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.position">position</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#position DataDatabricksFunctions#position}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeName">type_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#type_name DataDatabricksFunctions#type_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeText">type_text</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#type_text DataDatabricksFunctions#type_text}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#comment DataDatabricksFunctions#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.parameterDefault">parameter_default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#parameter_default DataDatabricksFunctions#parameter_default}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.parameterMode">parameter_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#parameter_mode DataDatabricksFunctions#parameter_mode}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.parameterType">parameter_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#parameter_type DataDatabricksFunctions#parameter_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeIntervalType">type_interval_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#type_interval_type DataDatabricksFunctions#type_interval_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeJson">type_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#type_json DataDatabricksFunctions#type_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typePrecision">type_precision</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#type_precision DataDatabricksFunctions#type_precision}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeScale">type_scale</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#type_scale DataDatabricksFunctions#type_scale}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#name DataDatabricksFunctions#name}.

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#position DataDatabricksFunctions#position}.

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#type_name DataDatabricksFunctions#type_name}.

---

##### `type_text`<sup>Required</sup> <a name="type_text" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeText"></a>

```python
type_text: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#type_text DataDatabricksFunctions#type_text}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#comment DataDatabricksFunctions#comment}.

---

##### `parameter_default`<sup>Optional</sup> <a name="parameter_default" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.parameterDefault"></a>

```python
parameter_default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#parameter_default DataDatabricksFunctions#parameter_default}.

---

##### `parameter_mode`<sup>Optional</sup> <a name="parameter_mode" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.parameterMode"></a>

```python
parameter_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#parameter_mode DataDatabricksFunctions#parameter_mode}.

---

##### `parameter_type`<sup>Optional</sup> <a name="parameter_type" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.parameterType"></a>

```python
parameter_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#parameter_type DataDatabricksFunctions#parameter_type}.

---

##### `type_interval_type`<sup>Optional</sup> <a name="type_interval_type" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeIntervalType"></a>

```python
type_interval_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#type_interval_type DataDatabricksFunctions#type_interval_type}.

---

##### `type_json`<sup>Optional</sup> <a name="type_json" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeJson"></a>

```python
type_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#type_json DataDatabricksFunctions#type_json}.

---

##### `type_precision`<sup>Optional</sup> <a name="type_precision" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typePrecision"></a>

```python
type_precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#type_precision DataDatabricksFunctions#type_precision}.

---

##### `type_scale`<sup>Optional</sup> <a name="type_scale" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters.property.typeScale"></a>

```python
type_scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#type_scale DataDatabricksFunctions#type_scale}.

---

### DataDatabricksFunctionsFunctionsRoutineDependencies <a name="DataDatabricksFunctionsFunctionsRoutineDependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies(
  dependencies: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies.property.dependencies">dependencies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies">DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#dependencies DataDatabricksFunctions#dependencies}. |

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies.property.dependencies"></a>

```python
dependencies: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies">DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#dependencies DataDatabricksFunctions#dependencies}.

---

### DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies(
  connection: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection]] = None,
  credential: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential]] = None,
  function: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction]] = None,
  table: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies.property.connection">connection</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#connection DataDatabricksFunctions#connection}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies.property.credential">credential</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#credential DataDatabricksFunctions#credential}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies.property.function">function</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#function DataDatabricksFunctions#function}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies.property.table">table</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#table DataDatabricksFunctions#table}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies.property.connection"></a>

```python
connection: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#connection DataDatabricksFunctions#connection}.

---

##### `credential`<sup>Optional</sup> <a name="credential" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies.property.credential"></a>

```python
credential: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#credential DataDatabricksFunctions#credential}.

---

##### `function`<sup>Optional</sup> <a name="function" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies.property.function"></a>

```python
function: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#function DataDatabricksFunctions#function}.

---

##### `table`<sup>Optional</sup> <a name="table" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies.property.table"></a>

```python
table: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#table DataDatabricksFunctions#table}.

---

### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection(
  connection_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection.property.connectionName">connection_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#connection_name DataDatabricksFunctions#connection_name}. |

---

##### `connection_name`<sup>Optional</sup> <a name="connection_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#connection_name DataDatabricksFunctions#connection_name}.

---

### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential(
  credential_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential.property.credentialName">credential_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#credential_name DataDatabricksFunctions#credential_name}. |

---

##### `credential_name`<sup>Optional</sup> <a name="credential_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential.property.credentialName"></a>

```python
credential_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#credential_name DataDatabricksFunctions#credential_name}.

---

### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction(
  function_full_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction.property.functionFullName">function_full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#function_full_name DataDatabricksFunctions#function_full_name}. |

---

##### `function_full_name`<sup>Required</sup> <a name="function_full_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction.property.functionFullName"></a>

```python
function_full_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#function_full_name DataDatabricksFunctions#function_full_name}.

---

### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable(
  table_full_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable.property.tableFullName">table_full_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#table_full_name DataDatabricksFunctions#table_full_name}. |

---

##### `table_full_name`<sup>Required</sup> <a name="table_full_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable.property.tableFullName"></a>

```python
table_full_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.85.0/docs/data-sources/functions#table_full_name DataDatabricksFunctions#table_full_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksFunctionsFunctionsInputParamsList <a name="DataDatabricksFunctionsFunctionsInputParamsList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksFunctionsFunctionsInputParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams">DataDatabricksFunctionsFunctionsInputParams</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsInputParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams">DataDatabricksFunctionsFunctionsInputParams</a>]]

---


### DataDatabricksFunctionsFunctionsInputParamsOutputReference <a name="DataDatabricksFunctionsFunctionsInputParamsOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameters` <a name="put_parameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.putParameters"></a>

```python
def put_parameters(
  value: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsInputParamsParameters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.putParameters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters">DataDatabricksFunctionsFunctionsInputParamsParameters</a>]]

---

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList">DataDatabricksFunctionsFunctionsInputParamsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters">DataDatabricksFunctionsFunctionsInputParamsParameters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams">DataDatabricksFunctionsFunctionsInputParams</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.parameters"></a>

```python
parameters: DataDatabricksFunctionsFunctionsInputParamsParametersList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList">DataDatabricksFunctionsFunctionsInputParamsParametersList</a>

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsInputParamsParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters">DataDatabricksFunctionsFunctionsInputParamsParameters</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksFunctionsFunctionsInputParams]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams">DataDatabricksFunctionsFunctionsInputParams</a>]

---


### DataDatabricksFunctionsFunctionsInputParamsParametersList <a name="DataDatabricksFunctionsFunctionsInputParamsParametersList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters">DataDatabricksFunctionsFunctionsInputParamsParameters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsInputParamsParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters">DataDatabricksFunctionsFunctionsInputParamsParameters</a>]]

---


### DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference <a name="DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetParameterDefault">reset_parameter_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetParameterMode">reset_parameter_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetParameterType">reset_parameter_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetTypeIntervalType">reset_type_interval_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetTypeJson">reset_type_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetTypePrecision">reset_type_precision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetTypeScale">reset_type_scale</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_parameter_default` <a name="reset_parameter_default" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetParameterDefault"></a>

```python
def reset_parameter_default() -> None
```

##### `reset_parameter_mode` <a name="reset_parameter_mode" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetParameterMode"></a>

```python
def reset_parameter_mode() -> None
```

##### `reset_parameter_type` <a name="reset_parameter_type" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetParameterType"></a>

```python
def reset_parameter_type() -> None
```

##### `reset_type_interval_type` <a name="reset_type_interval_type" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetTypeIntervalType"></a>

```python
def reset_type_interval_type() -> None
```

##### `reset_type_json` <a name="reset_type_json" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetTypeJson"></a>

```python
def reset_type_json() -> None
```

##### `reset_type_precision` <a name="reset_type_precision" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetTypePrecision"></a>

```python
def reset_type_precision() -> None
```

##### `reset_type_scale` <a name="reset_type_scale" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.resetTypeScale"></a>

```python
def reset_type_scale() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterDefaultInput">parameter_default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterModeInput">parameter_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterTypeInput">parameter_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.positionInput">position_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeIntervalTypeInput">type_interval_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeJsonInput">type_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeNameInput">type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typePrecisionInput">type_precision_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeScaleInput">type_scale_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeTextInput">type_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterDefault">parameter_default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterMode">parameter_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterType">parameter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.position">position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeIntervalType">type_interval_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeJson">type_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typePrecision">type_precision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeScale">type_scale</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeText">type_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters">DataDatabricksFunctionsFunctionsInputParamsParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameter_default_input`<sup>Optional</sup> <a name="parameter_default_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterDefaultInput"></a>

```python
parameter_default_input: str
```

- *Type:* str

---

##### `parameter_mode_input`<sup>Optional</sup> <a name="parameter_mode_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterModeInput"></a>

```python
parameter_mode_input: str
```

- *Type:* str

---

##### `parameter_type_input`<sup>Optional</sup> <a name="parameter_type_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterTypeInput"></a>

```python
parameter_type_input: str
```

- *Type:* str

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.positionInput"></a>

```python
position_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_interval_type_input`<sup>Optional</sup> <a name="type_interval_type_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeIntervalTypeInput"></a>

```python
type_interval_type_input: str
```

- *Type:* str

---

##### `type_json_input`<sup>Optional</sup> <a name="type_json_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeJsonInput"></a>

```python
type_json_input: str
```

- *Type:* str

---

##### `type_name_input`<sup>Optional</sup> <a name="type_name_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeNameInput"></a>

```python
type_name_input: str
```

- *Type:* str

---

##### `type_precision_input`<sup>Optional</sup> <a name="type_precision_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typePrecisionInput"></a>

```python
type_precision_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_scale_input`<sup>Optional</sup> <a name="type_scale_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeScaleInput"></a>

```python
type_scale_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_text_input`<sup>Optional</sup> <a name="type_text_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeTextInput"></a>

```python
type_text_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameter_default`<sup>Required</sup> <a name="parameter_default" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterDefault"></a>

```python
parameter_default: str
```

- *Type:* str

---

##### `parameter_mode`<sup>Required</sup> <a name="parameter_mode" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterMode"></a>

```python
parameter_mode: str
```

- *Type:* str

---

##### `parameter_type`<sup>Required</sup> <a name="parameter_type" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.parameterType"></a>

```python
parameter_type: str
```

- *Type:* str

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_interval_type`<sup>Required</sup> <a name="type_interval_type" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeIntervalType"></a>

```python
type_interval_type: str
```

- *Type:* str

---

##### `type_json`<sup>Required</sup> <a name="type_json" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeJson"></a>

```python
type_json: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `type_precision`<sup>Required</sup> <a name="type_precision" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typePrecision"></a>

```python
type_precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_scale`<sup>Required</sup> <a name="type_scale" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeScale"></a>

```python
type_scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_text`<sup>Required</sup> <a name="type_text" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.typeText"></a>

```python
type_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParametersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksFunctionsFunctionsInputParamsParameters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsParameters">DataDatabricksFunctionsFunctionsInputParamsParameters</a>]

---


### DataDatabricksFunctionsFunctionsList <a name="DataDatabricksFunctionsFunctionsList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksFunctionsFunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions">DataDatabricksFunctionsFunctions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions">DataDatabricksFunctionsFunctions</a>]]

---


### DataDatabricksFunctionsFunctionsOutputReference <a name="DataDatabricksFunctionsFunctionsOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putInputParams">put_input_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putReturnParams">put_return_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putRoutineDependencies">put_routine_dependencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetBrowseOnly">reset_browse_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetCatalogName">reset_catalog_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetCreatedAt">reset_created_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetCreatedBy">reset_created_by</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetDataType">reset_data_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetExternalLanguage">reset_external_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetExternalName">reset_external_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetFullDataType">reset_full_data_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetFullName">reset_full_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetFunctionId">reset_function_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetInputParams">reset_input_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetIsDeterministic">reset_is_deterministic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetIsNullCall">reset_is_null_call</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetMetastoreId">reset_metastore_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetOwner">reset_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetParameterStyle">reset_parameter_style</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetProperties">reset_properties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetReturnParams">reset_return_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetRoutineBody">reset_routine_body</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetRoutineDefinition">reset_routine_definition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetRoutineDependencies">reset_routine_dependencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSchemaName">reset_schema_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSecurityType">reset_security_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSpecificName">reset_specific_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSqlDataAccess">reset_sql_data_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSqlPath">reset_sql_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetUpdatedAt">reset_updated_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetUpdatedBy">reset_updated_by</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_input_params` <a name="put_input_params" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putInputParams"></a>

```python
def put_input_params(
  value: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsInputParams]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putInputParams.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams">DataDatabricksFunctionsFunctionsInputParams</a>]]

---

##### `put_return_params` <a name="put_return_params" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putReturnParams"></a>

```python
def put_return_params(
  value: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsReturnParams]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putReturnParams.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams">DataDatabricksFunctionsFunctionsReturnParams</a>]]

---

##### `put_routine_dependencies` <a name="put_routine_dependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putRoutineDependencies"></a>

```python
def put_routine_dependencies(
  value: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsRoutineDependencies]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.putRoutineDependencies.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies">DataDatabricksFunctionsFunctionsRoutineDependencies</a>]]

---

##### `reset_browse_only` <a name="reset_browse_only" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetBrowseOnly"></a>

```python
def reset_browse_only() -> None
```

##### `reset_catalog_name` <a name="reset_catalog_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetCatalogName"></a>

```python
def reset_catalog_name() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_created_at` <a name="reset_created_at" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetCreatedAt"></a>

```python
def reset_created_at() -> None
```

##### `reset_created_by` <a name="reset_created_by" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetCreatedBy"></a>

```python
def reset_created_by() -> None
```

##### `reset_data_type` <a name="reset_data_type" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetDataType"></a>

```python
def reset_data_type() -> None
```

##### `reset_external_language` <a name="reset_external_language" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetExternalLanguage"></a>

```python
def reset_external_language() -> None
```

##### `reset_external_name` <a name="reset_external_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetExternalName"></a>

```python
def reset_external_name() -> None
```

##### `reset_full_data_type` <a name="reset_full_data_type" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetFullDataType"></a>

```python
def reset_full_data_type() -> None
```

##### `reset_full_name` <a name="reset_full_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetFullName"></a>

```python
def reset_full_name() -> None
```

##### `reset_function_id` <a name="reset_function_id" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetFunctionId"></a>

```python
def reset_function_id() -> None
```

##### `reset_input_params` <a name="reset_input_params" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetInputParams"></a>

```python
def reset_input_params() -> None
```

##### `reset_is_deterministic` <a name="reset_is_deterministic" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetIsDeterministic"></a>

```python
def reset_is_deterministic() -> None
```

##### `reset_is_null_call` <a name="reset_is_null_call" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetIsNullCall"></a>

```python
def reset_is_null_call() -> None
```

##### `reset_metastore_id` <a name="reset_metastore_id" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetMetastoreId"></a>

```python
def reset_metastore_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_owner` <a name="reset_owner" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetOwner"></a>

```python
def reset_owner() -> None
```

##### `reset_parameter_style` <a name="reset_parameter_style" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetParameterStyle"></a>

```python
def reset_parameter_style() -> None
```

##### `reset_properties` <a name="reset_properties" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetProperties"></a>

```python
def reset_properties() -> None
```

##### `reset_return_params` <a name="reset_return_params" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetReturnParams"></a>

```python
def reset_return_params() -> None
```

##### `reset_routine_body` <a name="reset_routine_body" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetRoutineBody"></a>

```python
def reset_routine_body() -> None
```

##### `reset_routine_definition` <a name="reset_routine_definition" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetRoutineDefinition"></a>

```python
def reset_routine_definition() -> None
```

##### `reset_routine_dependencies` <a name="reset_routine_dependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetRoutineDependencies"></a>

```python
def reset_routine_dependencies() -> None
```

##### `reset_schema_name` <a name="reset_schema_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSchemaName"></a>

```python
def reset_schema_name() -> None
```

##### `reset_security_type` <a name="reset_security_type" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSecurityType"></a>

```python
def reset_security_type() -> None
```

##### `reset_specific_name` <a name="reset_specific_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSpecificName"></a>

```python
def reset_specific_name() -> None
```

##### `reset_sql_data_access` <a name="reset_sql_data_access" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSqlDataAccess"></a>

```python
def reset_sql_data_access() -> None
```

##### `reset_sql_path` <a name="reset_sql_path" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetSqlPath"></a>

```python
def reset_sql_path() -> None
```

##### `reset_updated_at` <a name="reset_updated_at" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetUpdatedAt"></a>

```python
def reset_updated_at() -> None
```

##### `reset_updated_by` <a name="reset_updated_by" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.resetUpdatedBy"></a>

```python
def reset_updated_by() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.inputParams">input_params</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList">DataDatabricksFunctionsFunctionsInputParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.returnParams">return_params</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList">DataDatabricksFunctionsFunctionsReturnParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineDependencies">routine_dependencies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList">DataDatabricksFunctionsFunctionsRoutineDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.browseOnlyInput">browse_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.catalogNameInput">catalog_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.createdAtInput">created_at_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.createdByInput">created_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.dataTypeInput">data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.externalLanguageInput">external_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.externalNameInput">external_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fullDataTypeInput">full_data_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fullNameInput">full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.functionIdInput">function_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.inputParamsInput">input_params_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams">DataDatabricksFunctionsFunctionsInputParams</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.isDeterministicInput">is_deterministic_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.isNullCallInput">is_null_call_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.metastoreIdInput">metastore_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.parameterStyleInput">parameter_style_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.propertiesInput">properties_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.returnParamsInput">return_params_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams">DataDatabricksFunctionsFunctionsReturnParams</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineBodyInput">routine_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineDefinitionInput">routine_definition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineDependenciesInput">routine_dependencies_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies">DataDatabricksFunctionsFunctionsRoutineDependencies</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.schemaNameInput">schema_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.securityTypeInput">security_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.specificNameInput">specific_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.sqlDataAccessInput">sql_data_access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.sqlPathInput">sql_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.updatedAtInput">updated_at_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.updatedByInput">updated_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.browseOnly">browse_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.catalogName">catalog_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.createdAt">created_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.externalLanguage">external_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.externalName">external_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fullDataType">full_data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fullName">full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.functionId">function_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.isDeterministic">is_deterministic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.isNullCall">is_null_call</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.metastoreId">metastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.parameterStyle">parameter_style</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.properties">properties</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineBody">routine_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineDefinition">routine_definition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.securityType">security_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.specificName">specific_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.sqlDataAccess">sql_data_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.sqlPath">sql_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.updatedAt">updated_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.updatedBy">updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions">DataDatabricksFunctionsFunctions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_params`<sup>Required</sup> <a name="input_params" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.inputParams"></a>

```python
input_params: DataDatabricksFunctionsFunctionsInputParamsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParamsList">DataDatabricksFunctionsFunctionsInputParamsList</a>

---

##### `return_params`<sup>Required</sup> <a name="return_params" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.returnParams"></a>

```python
return_params: DataDatabricksFunctionsFunctionsReturnParamsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList">DataDatabricksFunctionsFunctionsReturnParamsList</a>

---

##### `routine_dependencies`<sup>Required</sup> <a name="routine_dependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineDependencies"></a>

```python
routine_dependencies: DataDatabricksFunctionsFunctionsRoutineDependenciesList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList">DataDatabricksFunctionsFunctionsRoutineDependenciesList</a>

---

##### `browse_only_input`<sup>Optional</sup> <a name="browse_only_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.browseOnlyInput"></a>

```python
browse_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `catalog_name_input`<sup>Optional</sup> <a name="catalog_name_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.catalogNameInput"></a>

```python
catalog_name_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `created_at_input`<sup>Optional</sup> <a name="created_at_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.createdAtInput"></a>

```python
created_at_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_by_input`<sup>Optional</sup> <a name="created_by_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.createdByInput"></a>

```python
created_by_input: str
```

- *Type:* str

---

##### `data_type_input`<sup>Optional</sup> <a name="data_type_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.dataTypeInput"></a>

```python
data_type_input: str
```

- *Type:* str

---

##### `external_language_input`<sup>Optional</sup> <a name="external_language_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.externalLanguageInput"></a>

```python
external_language_input: str
```

- *Type:* str

---

##### `external_name_input`<sup>Optional</sup> <a name="external_name_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.externalNameInput"></a>

```python
external_name_input: str
```

- *Type:* str

---

##### `full_data_type_input`<sup>Optional</sup> <a name="full_data_type_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fullDataTypeInput"></a>

```python
full_data_type_input: str
```

- *Type:* str

---

##### `full_name_input`<sup>Optional</sup> <a name="full_name_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fullNameInput"></a>

```python
full_name_input: str
```

- *Type:* str

---

##### `function_id_input`<sup>Optional</sup> <a name="function_id_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.functionIdInput"></a>

```python
function_id_input: str
```

- *Type:* str

---

##### `input_params_input`<sup>Optional</sup> <a name="input_params_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.inputParamsInput"></a>

```python
input_params_input: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsInputParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsInputParams">DataDatabricksFunctionsFunctionsInputParams</a>]]

---

##### `is_deterministic_input`<sup>Optional</sup> <a name="is_deterministic_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.isDeterministicInput"></a>

```python
is_deterministic_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_null_call_input`<sup>Optional</sup> <a name="is_null_call_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.isNullCallInput"></a>

```python
is_null_call_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metastore_id_input`<sup>Optional</sup> <a name="metastore_id_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.metastoreIdInput"></a>

```python
metastore_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `parameter_style_input`<sup>Optional</sup> <a name="parameter_style_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.parameterStyleInput"></a>

```python
parameter_style_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.propertiesInput"></a>

```python
properties_input: str
```

- *Type:* str

---

##### `return_params_input`<sup>Optional</sup> <a name="return_params_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.returnParamsInput"></a>

```python
return_params_input: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsReturnParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams">DataDatabricksFunctionsFunctionsReturnParams</a>]]

---

##### `routine_body_input`<sup>Optional</sup> <a name="routine_body_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineBodyInput"></a>

```python
routine_body_input: str
```

- *Type:* str

---

##### `routine_definition_input`<sup>Optional</sup> <a name="routine_definition_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineDefinitionInput"></a>

```python
routine_definition_input: str
```

- *Type:* str

---

##### `routine_dependencies_input`<sup>Optional</sup> <a name="routine_dependencies_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineDependenciesInput"></a>

```python
routine_dependencies_input: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsRoutineDependencies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies">DataDatabricksFunctionsFunctionsRoutineDependencies</a>]]

---

##### `schema_name_input`<sup>Optional</sup> <a name="schema_name_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.schemaNameInput"></a>

```python
schema_name_input: str
```

- *Type:* str

---

##### `security_type_input`<sup>Optional</sup> <a name="security_type_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.securityTypeInput"></a>

```python
security_type_input: str
```

- *Type:* str

---

##### `specific_name_input`<sup>Optional</sup> <a name="specific_name_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.specificNameInput"></a>

```python
specific_name_input: str
```

- *Type:* str

---

##### `sql_data_access_input`<sup>Optional</sup> <a name="sql_data_access_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.sqlDataAccessInput"></a>

```python
sql_data_access_input: str
```

- *Type:* str

---

##### `sql_path_input`<sup>Optional</sup> <a name="sql_path_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.sqlPathInput"></a>

```python
sql_path_input: str
```

- *Type:* str

---

##### `updated_at_input`<sup>Optional</sup> <a name="updated_at_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.updatedAtInput"></a>

```python
updated_at_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_by_input`<sup>Optional</sup> <a name="updated_by_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.updatedByInput"></a>

```python
updated_by_input: str
```

- *Type:* str

---

##### `browse_only`<sup>Required</sup> <a name="browse_only" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.browseOnly"></a>

```python
browse_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `catalog_name`<sup>Required</sup> <a name="catalog_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.catalogName"></a>

```python
catalog_name: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.createdAt"></a>

```python
created_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `external_language`<sup>Required</sup> <a name="external_language" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.externalLanguage"></a>

```python
external_language: str
```

- *Type:* str

---

##### `external_name`<sup>Required</sup> <a name="external_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.externalName"></a>

```python
external_name: str
```

- *Type:* str

---

##### `full_data_type`<sup>Required</sup> <a name="full_data_type" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fullDataType"></a>

```python
full_data_type: str
```

- *Type:* str

---

##### `full_name`<sup>Required</sup> <a name="full_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.fullName"></a>

```python
full_name: str
```

- *Type:* str

---

##### `function_id`<sup>Required</sup> <a name="function_id" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.functionId"></a>

```python
function_id: str
```

- *Type:* str

---

##### `is_deterministic`<sup>Required</sup> <a name="is_deterministic" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.isDeterministic"></a>

```python
is_deterministic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_null_call`<sup>Required</sup> <a name="is_null_call" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.isNullCall"></a>

```python
is_null_call: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metastore_id`<sup>Required</sup> <a name="metastore_id" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `parameter_style`<sup>Required</sup> <a name="parameter_style" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.parameterStyle"></a>

```python
parameter_style: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.properties"></a>

```python
properties: str
```

- *Type:* str

---

##### `routine_body`<sup>Required</sup> <a name="routine_body" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineBody"></a>

```python
routine_body: str
```

- *Type:* str

---

##### `routine_definition`<sup>Required</sup> <a name="routine_definition" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.routineDefinition"></a>

```python
routine_definition: str
```

- *Type:* str

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `security_type`<sup>Required</sup> <a name="security_type" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.securityType"></a>

```python
security_type: str
```

- *Type:* str

---

##### `specific_name`<sup>Required</sup> <a name="specific_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.specificName"></a>

```python
specific_name: str
```

- *Type:* str

---

##### `sql_data_access`<sup>Required</sup> <a name="sql_data_access" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.sqlDataAccess"></a>

```python
sql_data_access: str
```

- *Type:* str

---

##### `sql_path`<sup>Required</sup> <a name="sql_path" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.sqlPath"></a>

```python
sql_path: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.updatedAt"></a>

```python
updated_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `updated_by`<sup>Required</sup> <a name="updated_by" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.updatedBy"></a>

```python
updated_by: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksFunctionsFunctions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctions">DataDatabricksFunctionsFunctions</a>]

---


### DataDatabricksFunctionsFunctionsReturnParamsList <a name="DataDatabricksFunctionsFunctionsReturnParamsList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksFunctionsFunctionsReturnParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams">DataDatabricksFunctionsFunctionsReturnParams</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsReturnParams]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams">DataDatabricksFunctionsFunctionsReturnParams</a>]]

---


### DataDatabricksFunctionsFunctionsReturnParamsOutputReference <a name="DataDatabricksFunctionsFunctionsReturnParamsOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_parameters` <a name="put_parameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.putParameters"></a>

```python
def put_parameters(
  value: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsReturnParamsParameters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.putParameters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters">DataDatabricksFunctionsFunctionsReturnParamsParameters</a>]]

---

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList">DataDatabricksFunctionsFunctionsReturnParamsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters">DataDatabricksFunctionsFunctionsReturnParamsParameters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams">DataDatabricksFunctionsFunctionsReturnParams</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.parameters"></a>

```python
parameters: DataDatabricksFunctionsFunctionsReturnParamsParametersList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList">DataDatabricksFunctionsFunctionsReturnParamsParametersList</a>

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsReturnParamsParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters">DataDatabricksFunctionsFunctionsReturnParamsParameters</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksFunctionsFunctionsReturnParams]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParams">DataDatabricksFunctionsFunctionsReturnParams</a>]

---


### DataDatabricksFunctionsFunctionsReturnParamsParametersList <a name="DataDatabricksFunctionsFunctionsReturnParamsParametersList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters">DataDatabricksFunctionsFunctionsReturnParamsParameters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsReturnParamsParameters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters">DataDatabricksFunctionsFunctionsReturnParamsParameters</a>]]

---


### DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference <a name="DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetParameterDefault">reset_parameter_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetParameterMode">reset_parameter_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetParameterType">reset_parameter_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetTypeIntervalType">reset_type_interval_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetTypeJson">reset_type_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetTypePrecision">reset_type_precision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetTypeScale">reset_type_scale</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_parameter_default` <a name="reset_parameter_default" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetParameterDefault"></a>

```python
def reset_parameter_default() -> None
```

##### `reset_parameter_mode` <a name="reset_parameter_mode" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetParameterMode"></a>

```python
def reset_parameter_mode() -> None
```

##### `reset_parameter_type` <a name="reset_parameter_type" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetParameterType"></a>

```python
def reset_parameter_type() -> None
```

##### `reset_type_interval_type` <a name="reset_type_interval_type" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetTypeIntervalType"></a>

```python
def reset_type_interval_type() -> None
```

##### `reset_type_json` <a name="reset_type_json" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetTypeJson"></a>

```python
def reset_type_json() -> None
```

##### `reset_type_precision` <a name="reset_type_precision" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetTypePrecision"></a>

```python
def reset_type_precision() -> None
```

##### `reset_type_scale` <a name="reset_type_scale" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.resetTypeScale"></a>

```python
def reset_type_scale() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterDefaultInput">parameter_default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterModeInput">parameter_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterTypeInput">parameter_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.positionInput">position_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeIntervalTypeInput">type_interval_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeJsonInput">type_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeNameInput">type_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typePrecisionInput">type_precision_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeScaleInput">type_scale_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeTextInput">type_text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterDefault">parameter_default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterMode">parameter_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterType">parameter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.position">position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeIntervalType">type_interval_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeJson">type_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeName">type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typePrecision">type_precision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeScale">type_scale</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeText">type_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters">DataDatabricksFunctionsFunctionsReturnParamsParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parameter_default_input`<sup>Optional</sup> <a name="parameter_default_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterDefaultInput"></a>

```python
parameter_default_input: str
```

- *Type:* str

---

##### `parameter_mode_input`<sup>Optional</sup> <a name="parameter_mode_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterModeInput"></a>

```python
parameter_mode_input: str
```

- *Type:* str

---

##### `parameter_type_input`<sup>Optional</sup> <a name="parameter_type_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterTypeInput"></a>

```python
parameter_type_input: str
```

- *Type:* str

---

##### `position_input`<sup>Optional</sup> <a name="position_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.positionInput"></a>

```python
position_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_interval_type_input`<sup>Optional</sup> <a name="type_interval_type_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeIntervalTypeInput"></a>

```python
type_interval_type_input: str
```

- *Type:* str

---

##### `type_json_input`<sup>Optional</sup> <a name="type_json_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeJsonInput"></a>

```python
type_json_input: str
```

- *Type:* str

---

##### `type_name_input`<sup>Optional</sup> <a name="type_name_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeNameInput"></a>

```python
type_name_input: str
```

- *Type:* str

---

##### `type_precision_input`<sup>Optional</sup> <a name="type_precision_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typePrecisionInput"></a>

```python
type_precision_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_scale_input`<sup>Optional</sup> <a name="type_scale_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeScaleInput"></a>

```python
type_scale_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_text_input`<sup>Optional</sup> <a name="type_text_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeTextInput"></a>

```python
type_text_input: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parameter_default`<sup>Required</sup> <a name="parameter_default" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterDefault"></a>

```python
parameter_default: str
```

- *Type:* str

---

##### `parameter_mode`<sup>Required</sup> <a name="parameter_mode" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterMode"></a>

```python
parameter_mode: str
```

- *Type:* str

---

##### `parameter_type`<sup>Required</sup> <a name="parameter_type" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.parameterType"></a>

```python
parameter_type: str
```

- *Type:* str

---

##### `position`<sup>Required</sup> <a name="position" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.position"></a>

```python
position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_interval_type`<sup>Required</sup> <a name="type_interval_type" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeIntervalType"></a>

```python
type_interval_type: str
```

- *Type:* str

---

##### `type_json`<sup>Required</sup> <a name="type_json" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeJson"></a>

```python
type_json: str
```

- *Type:* str

---

##### `type_name`<sup>Required</sup> <a name="type_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeName"></a>

```python
type_name: str
```

- *Type:* str

---

##### `type_precision`<sup>Required</sup> <a name="type_precision" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typePrecision"></a>

```python
type_precision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_scale`<sup>Required</sup> <a name="type_scale" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeScale"></a>

```python
type_scale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_text`<sup>Required</sup> <a name="type_text" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.typeText"></a>

```python
type_text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParametersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksFunctionsFunctionsReturnParamsParameters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsReturnParamsParameters">DataDatabricksFunctionsFunctionsReturnParamsParameters</a>]

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection</a>]]

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.resetConnectionName">reset_connection_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_name` <a name="reset_connection_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.resetConnectionName"></a>

```python
def reset_connection_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.property.connectionNameInput">connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.property.connectionName">connection_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_name_input`<sup>Optional</sup> <a name="connection_name_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.property.connectionNameInput"></a>

```python
connection_name_input: str
```

- *Type:* str

---

##### `connection_name`<sup>Required</sup> <a name="connection_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.property.connectionName"></a>

```python
connection_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection</a>]

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential</a>]]

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.resetCredentialName">reset_credential_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_credential_name` <a name="reset_credential_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.resetCredentialName"></a>

```python
def reset_credential_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.property.credentialNameInput">credential_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.property.credentialName">credential_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_name_input`<sup>Optional</sup> <a name="credential_name_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.property.credentialNameInput"></a>

```python
credential_name_input: str
```

- *Type:* str

---

##### `credential_name`<sup>Required</sup> <a name="credential_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.property.credentialName"></a>

```python
credential_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential</a>]

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction</a>]]

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.functionFullNameInput">function_full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.functionFullName">function_full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `function_full_name_input`<sup>Optional</sup> <a name="function_full_name_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.functionFullNameInput"></a>

```python
function_full_name_input: str
```

- *Type:* str

---

##### `function_full_name`<sup>Required</sup> <a name="function_full_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.functionFullName"></a>

```python
function_full_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction</a>]

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies">DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies">DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies</a>]]

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putConnection">put_connection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putCredential">put_credential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putFunction">put_function</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putTable">put_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resetConnection">reset_connection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resetCredential">reset_credential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resetFunction">reset_function</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resetTable">reset_table</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_connection` <a name="put_connection" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putConnection"></a>

```python
def put_connection(
  value: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putConnection.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection</a>]]

---

##### `put_credential` <a name="put_credential" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putCredential"></a>

```python
def put_credential(
  value: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putCredential.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential</a>]]

---

##### `put_function` <a name="put_function" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putFunction"></a>

```python
def put_function(
  value: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putFunction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction</a>]]

---

##### `put_table` <a name="put_table" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putTable"></a>

```python
def put_table(
  value: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.putTable.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable</a>]]

---

##### `reset_connection` <a name="reset_connection" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resetConnection"></a>

```python
def reset_connection() -> None
```

##### `reset_credential` <a name="reset_credential" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resetCredential"></a>

```python
def reset_credential() -> None
```

##### `reset_function` <a name="reset_function" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resetFunction"></a>

```python
def reset_function() -> None
```

##### `reset_table` <a name="reset_table" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.resetTable"></a>

```python
def reset_table() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.connection">connection</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.credential">credential</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.function">function</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.table">table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.connectionInput">connection_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.credentialInput">credential_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.functionInput">function_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.tableInput">table_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies">DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection`<sup>Required</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.connection"></a>

```python
connection: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnectionList</a>

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.credential"></a>

```python
credential: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredentialList</a>

---

##### `function`<sup>Required</sup> <a name="function" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.function"></a>

```python
function: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunctionList</a>

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.table"></a>

```python
table: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList</a>

---

##### `connection_input`<sup>Optional</sup> <a name="connection_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.connectionInput"></a>

```python
connection_input: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesConnection</a>]]

---

##### `credential_input`<sup>Optional</sup> <a name="credential_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.credentialInput"></a>

```python
credential_input: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesCredential</a>]]

---

##### `function_input`<sup>Optional</sup> <a name="function_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.functionInput"></a>

```python
function_input: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesFunction</a>]]

---

##### `table_input`<sup>Optional</sup> <a name="table_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.tableInput"></a>

```python
table_input: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies">DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies</a>]

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable</a>]]

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.tableFullNameInput">table_full_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.tableFullName">table_full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `table_full_name_input`<sup>Optional</sup> <a name="table_full_name_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.tableFullNameInput"></a>

```python
table_full_name_input: str
```

- *Type:* str

---

##### `table_full_name`<sup>Required</sup> <a name="table_full_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.tableFullName"></a>

```python
table_full_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTableOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesTable</a>]

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesList <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesList" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies">DataDatabricksFunctionsFunctionsRoutineDependencies</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsRoutineDependencies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies">DataDatabricksFunctionsFunctionsRoutineDependencies</a>]]

---


### DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference <a name="DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_functions

dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.putDependencies">put_dependencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.resetDependencies">reset_dependencies</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dependencies` <a name="put_dependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.putDependencies"></a>

```python
def put_dependencies(
  value: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.putDependencies.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies">DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies</a>]]

---

##### `reset_dependencies` <a name="reset_dependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.resetDependencies"></a>

```python
def reset_dependencies() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.dependencies">dependencies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.dependenciesInput">dependencies_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies">DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies">DataDatabricksFunctionsFunctionsRoutineDependencies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dependencies`<sup>Required</sup> <a name="dependencies" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.dependencies"></a>

```python
dependencies: DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList">DataDatabricksFunctionsFunctionsRoutineDependenciesDependenciesList</a>

---

##### `dependencies_input`<sup>Optional</sup> <a name="dependencies_input" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.dependenciesInput"></a>

```python
dependencies_input: typing.Union[IResolvable, typing.List[DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies">DataDatabricksFunctionsFunctionsRoutineDependenciesDependencies</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependenciesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksFunctionsFunctionsRoutineDependencies]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksFunctions.DataDatabricksFunctionsFunctionsRoutineDependencies">DataDatabricksFunctionsFunctionsRoutineDependencies</a>]

---



