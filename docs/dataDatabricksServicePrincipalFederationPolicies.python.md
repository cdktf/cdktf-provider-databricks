# `dataDatabricksServicePrincipalFederationPolicies` Submodule <a name="`dataDatabricksServicePrincipalFederationPolicies` Submodule" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksServicePrincipalFederationPolicies <a name="DataDatabricksServicePrincipalFederationPolicies" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/service_principal_federation_policies databricks_service_principal_federation_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_service_principal_federation_policies

dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service_principal_id: typing.Union[int, float]
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.servicePrincipalId">service_principal_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/service_principal_federation_policies#service_principal_id DataDatabricksServicePrincipalFederationPolicies#service_principal_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service_principal_id`<sup>Required</sup> <a name="service_principal_id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.Initializer.parameter.servicePrincipalId"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/service_principal_federation_policies#service_principal_id DataDatabricksServicePrincipalFederationPolicies#service_principal_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksServicePrincipalFederationPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_service_principal_federation_policies

dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_service_principal_federation_policies

dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_service_principal_federation_policies

dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_service_principal_federation_policies

dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksServicePrincipalFederationPolicies resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksServicePrincipalFederationPolicies to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksServicePrincipalFederationPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/service_principal_federation_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksServicePrincipalFederationPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList">DataDatabricksServicePrincipalFederationPoliciesPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.servicePrincipalIdInput">service_principal_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.servicePrincipalId">service_principal_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.policies"></a>

```python
policies: DataDatabricksServicePrincipalFederationPoliciesPoliciesList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList">DataDatabricksServicePrincipalFederationPoliciesPoliciesList</a>

---

##### `service_principal_id_input`<sup>Optional</sup> <a name="service_principal_id_input" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.servicePrincipalIdInput"></a>

```python
service_principal_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_principal_id`<sup>Required</sup> <a name="service_principal_id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.servicePrincipalId"></a>

```python
service_principal_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPolicies.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksServicePrincipalFederationPoliciesConfig <a name="DataDatabricksServicePrincipalFederationPoliciesConfig" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_service_principal_federation_policies

dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  service_principal_id: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.servicePrincipalId">service_principal_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/service_principal_federation_policies#service_principal_id DataDatabricksServicePrincipalFederationPolicies#service_principal_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `service_principal_id`<sup>Required</sup> <a name="service_principal_id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesConfig.property.servicePrincipalId"></a>

```python
service_principal_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/service_principal_federation_policies#service_principal_id DataDatabricksServicePrincipalFederationPolicies#service_principal_id}.

---

### DataDatabricksServicePrincipalFederationPoliciesPolicies <a name="DataDatabricksServicePrincipalFederationPoliciesPolicies" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_service_principal_federation_policies

dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies(
  description: str = None,
  oidc_policy: DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy = None,
  policy_id: str = None,
  service_principal_id: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/service_principal_federation_policies#description DataDatabricksServicePrincipalFederationPolicies#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies.property.oidcPolicy">oidc_policy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy">DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/service_principal_federation_policies#oidc_policy DataDatabricksServicePrincipalFederationPolicies#oidc_policy}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies.property.policyId">policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/service_principal_federation_policies#policy_id DataDatabricksServicePrincipalFederationPolicies#policy_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies.property.servicePrincipalId">service_principal_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/service_principal_federation_policies#service_principal_id DataDatabricksServicePrincipalFederationPolicies#service_principal_id}. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/service_principal_federation_policies#description DataDatabricksServicePrincipalFederationPolicies#description}.

---

##### `oidc_policy`<sup>Optional</sup> <a name="oidc_policy" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies.property.oidcPolicy"></a>

```python
oidc_policy: DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy">DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/service_principal_federation_policies#oidc_policy DataDatabricksServicePrincipalFederationPolicies#oidc_policy}.

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/service_principal_federation_policies#policy_id DataDatabricksServicePrincipalFederationPolicies#policy_id}.

---

##### `service_principal_id`<sup>Optional</sup> <a name="service_principal_id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies.property.servicePrincipalId"></a>

```python
service_principal_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/service_principal_federation_policies#service_principal_id DataDatabricksServicePrincipalFederationPolicies#service_principal_id}.

---

### DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy <a name="DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_service_principal_federation_policies

dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy(
  audiences: typing.List[str] = None,
  issuer: str = None,
  jwks_json: str = None,
  jwks_uri: str = None,
  subject: str = None,
  subject_claim: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.audiences">audiences</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/service_principal_federation_policies#audiences DataDatabricksServicePrincipalFederationPolicies#audiences}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.issuer">issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/service_principal_federation_policies#issuer DataDatabricksServicePrincipalFederationPolicies#issuer}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.jwksJson">jwks_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/service_principal_federation_policies#jwks_json DataDatabricksServicePrincipalFederationPolicies#jwks_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.jwksUri">jwks_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/service_principal_federation_policies#jwks_uri DataDatabricksServicePrincipalFederationPolicies#jwks_uri}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.subject">subject</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/service_principal_federation_policies#subject DataDatabricksServicePrincipalFederationPolicies#subject}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.subjectClaim">subject_claim</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/service_principal_federation_policies#subject_claim DataDatabricksServicePrincipalFederationPolicies#subject_claim}. |

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.audiences"></a>

```python
audiences: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/service_principal_federation_policies#audiences DataDatabricksServicePrincipalFederationPolicies#audiences}.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/service_principal_federation_policies#issuer DataDatabricksServicePrincipalFederationPolicies#issuer}.

---

##### `jwks_json`<sup>Optional</sup> <a name="jwks_json" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.jwksJson"></a>

```python
jwks_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/service_principal_federation_policies#jwks_json DataDatabricksServicePrincipalFederationPolicies#jwks_json}.

---

##### `jwks_uri`<sup>Optional</sup> <a name="jwks_uri" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.jwksUri"></a>

```python
jwks_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/service_principal_federation_policies#jwks_uri DataDatabricksServicePrincipalFederationPolicies#jwks_uri}.

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.subject"></a>

```python
subject: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/service_principal_federation_policies#subject DataDatabricksServicePrincipalFederationPolicies#subject}.

---

##### `subject_claim`<sup>Optional</sup> <a name="subject_claim" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy.property.subjectClaim"></a>

```python
subject_claim: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/service_principal_federation_policies#subject_claim DataDatabricksServicePrincipalFederationPolicies#subject_claim}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksServicePrincipalFederationPoliciesPoliciesList <a name="DataDatabricksServicePrincipalFederationPoliciesPoliciesList" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_service_principal_federation_policies

dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies">DataDatabricksServicePrincipalFederationPoliciesPolicies</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataDatabricksServicePrincipalFederationPoliciesPolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies">DataDatabricksServicePrincipalFederationPoliciesPolicies</a>]]

---


### DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference <a name="DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_service_principal_federation_policies

dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetAudiences">reset_audiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetIssuer">reset_issuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetJwksJson">reset_jwks_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetJwksUri">reset_jwks_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetSubject">reset_subject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetSubjectClaim">reset_subject_claim</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_audiences` <a name="reset_audiences" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetAudiences"></a>

```python
def reset_audiences() -> None
```

##### `reset_issuer` <a name="reset_issuer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetIssuer"></a>

```python
def reset_issuer() -> None
```

##### `reset_jwks_json` <a name="reset_jwks_json" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetJwksJson"></a>

```python
def reset_jwks_json() -> None
```

##### `reset_jwks_uri` <a name="reset_jwks_uri" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetJwksUri"></a>

```python
def reset_jwks_uri() -> None
```

##### `reset_subject` <a name="reset_subject" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetSubject"></a>

```python
def reset_subject() -> None
```

##### `reset_subject_claim` <a name="reset_subject_claim" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.resetSubjectClaim"></a>

```python
def reset_subject_claim() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.audiencesInput">audiences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksJsonInput">jwks_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksUriInput">jwks_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectClaimInput">subject_claim_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectInput">subject_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.audiences">audiences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksJson">jwks_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksUri">jwks_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectClaim">subject_claim</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy">DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audiences_input`<sup>Optional</sup> <a name="audiences_input" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.audiencesInput"></a>

```python
audiences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `jwks_json_input`<sup>Optional</sup> <a name="jwks_json_input" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksJsonInput"></a>

```python
jwks_json_input: str
```

- *Type:* str

---

##### `jwks_uri_input`<sup>Optional</sup> <a name="jwks_uri_input" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksUriInput"></a>

```python
jwks_uri_input: str
```

- *Type:* str

---

##### `subject_claim_input`<sup>Optional</sup> <a name="subject_claim_input" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectClaimInput"></a>

```python
subject_claim_input: str
```

- *Type:* str

---

##### `subject_input`<sup>Optional</sup> <a name="subject_input" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectInput"></a>

```python
subject_input: str
```

- *Type:* str

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.audiences"></a>

```python
audiences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `jwks_json`<sup>Required</sup> <a name="jwks_json" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksJson"></a>

```python
jwks_json: str
```

- *Type:* str

---

##### `jwks_uri`<sup>Required</sup> <a name="jwks_uri" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.jwksUri"></a>

```python
jwks_uri: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `subject_claim`<sup>Required</sup> <a name="subject_claim" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.subjectClaim"></a>

```python
subject_claim: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy">DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy</a>]

---


### DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference <a name="DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_service_principal_federation_policies

dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.putOidcPolicy">put_oidc_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.resetOidcPolicy">reset_oidc_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.resetPolicyId">reset_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.resetServicePrincipalId">reset_service_principal_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_oidc_policy` <a name="put_oidc_policy" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.putOidcPolicy"></a>

```python
def put_oidc_policy(
  audiences: typing.List[str] = None,
  issuer: str = None,
  jwks_json: str = None,
  jwks_uri: str = None,
  subject: str = None,
  subject_claim: str = None
) -> None
```

###### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.putOidcPolicy.parameter.audiences"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/service_principal_federation_policies#audiences DataDatabricksServicePrincipalFederationPolicies#audiences}.

---

###### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.putOidcPolicy.parameter.issuer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/service_principal_federation_policies#issuer DataDatabricksServicePrincipalFederationPolicies#issuer}.

---

###### `jwks_json`<sup>Optional</sup> <a name="jwks_json" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.putOidcPolicy.parameter.jwksJson"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/service_principal_federation_policies#jwks_json DataDatabricksServicePrincipalFederationPolicies#jwks_json}.

---

###### `jwks_uri`<sup>Optional</sup> <a name="jwks_uri" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.putOidcPolicy.parameter.jwksUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/service_principal_federation_policies#jwks_uri DataDatabricksServicePrincipalFederationPolicies#jwks_uri}.

---

###### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.putOidcPolicy.parameter.subject"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/service_principal_federation_policies#subject DataDatabricksServicePrincipalFederationPolicies#subject}.

---

###### `subject_claim`<sup>Optional</sup> <a name="subject_claim" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.putOidcPolicy.parameter.subjectClaim"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.89.0/docs/data-sources/service_principal_federation_policies#subject_claim DataDatabricksServicePrincipalFederationPolicies#subject_claim}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_oidc_policy` <a name="reset_oidc_policy" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.resetOidcPolicy"></a>

```python
def reset_oidc_policy() -> None
```

##### `reset_policy_id` <a name="reset_policy_id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.resetPolicyId"></a>

```python
def reset_policy_id() -> None
```

##### `reset_service_principal_id` <a name="reset_service_principal_id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.resetServicePrincipalId"></a>

```python
def reset_service_principal_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.oidcPolicy">oidc_policy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference">DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.oidcPolicyInput">oidc_policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy">DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.servicePrincipalIdInput">service_principal_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.servicePrincipalId">service_principal_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies">DataDatabricksServicePrincipalFederationPoliciesPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `oidc_policy`<sup>Required</sup> <a name="oidc_policy" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.oidcPolicy"></a>

```python
oidc_policy: DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference">DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicyOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `oidc_policy_input`<sup>Optional</sup> <a name="oidc_policy_input" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.oidcPolicyInput"></a>

```python
oidc_policy_input: typing.Union[IResolvable, DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy">DataDatabricksServicePrincipalFederationPoliciesPoliciesOidcPolicy</a>]

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `service_principal_id_input`<sup>Optional</sup> <a name="service_principal_id_input" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.servicePrincipalIdInput"></a>

```python
service_principal_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `service_principal_id`<sup>Required</sup> <a name="service_principal_id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.servicePrincipalId"></a>

```python
service_principal_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksServicePrincipalFederationPoliciesPolicies
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicies.DataDatabricksServicePrincipalFederationPoliciesPolicies">DataDatabricksServicePrincipalFederationPoliciesPolicies</a>

---



