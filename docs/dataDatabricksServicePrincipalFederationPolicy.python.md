# `dataDatabricksServicePrincipalFederationPolicy` Submodule <a name="`dataDatabricksServicePrincipalFederationPolicy` Submodule" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksServicePrincipalFederationPolicy <a name="DataDatabricksServicePrincipalFederationPolicy" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/service_principal_federation_policy databricks_service_principal_federation_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_service_principal_federation_policy

dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  policy_id: str,
  service_principal_id: typing.Union[int, float]
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.policyId">policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/service_principal_federation_policy#policy_id DataDatabricksServicePrincipalFederationPolicy#policy_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.servicePrincipalId">service_principal_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/service_principal_federation_policy#service_principal_id DataDatabricksServicePrincipalFederationPolicy#service_principal_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.policyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/service_principal_federation_policy#policy_id DataDatabricksServicePrincipalFederationPolicy#policy_id}.

---

##### `service_principal_id`<sup>Required</sup> <a name="service_principal_id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.Initializer.parameter.servicePrincipalId"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/service_principal_federation_policy#service_principal_id DataDatabricksServicePrincipalFederationPolicy#service_principal_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksServicePrincipalFederationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_service_principal_federation_policy

dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_service_principal_federation_policy

dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_service_principal_federation_policy

dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_service_principal_federation_policy

dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksServicePrincipalFederationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksServicePrincipalFederationPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksServicePrincipalFederationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/service_principal_federation_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksServicePrincipalFederationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.oidcPolicy">oidc_policy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference">DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.servicePrincipalIdInput">service_principal_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.servicePrincipalId">service_principal_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `oidc_policy`<sup>Required</sup> <a name="oidc_policy" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.oidcPolicy"></a>

```python
oidc_policy: DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference">DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `service_principal_id_input`<sup>Optional</sup> <a name="service_principal_id_input" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.servicePrincipalIdInput"></a>

```python
service_principal_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `service_principal_id`<sup>Required</sup> <a name="service_principal_id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.servicePrincipalId"></a>

```python
service_principal_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksServicePrincipalFederationPolicyConfig <a name="DataDatabricksServicePrincipalFederationPolicyConfig" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_service_principal_federation_policy

dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  policy_id: str,
  service_principal_id: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.policyId">policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/service_principal_federation_policy#policy_id DataDatabricksServicePrincipalFederationPolicy#policy_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.servicePrincipalId">service_principal_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/service_principal_federation_policy#service_principal_id DataDatabricksServicePrincipalFederationPolicy#service_principal_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/service_principal_federation_policy#policy_id DataDatabricksServicePrincipalFederationPolicy#policy_id}.

---

##### `service_principal_id`<sup>Required</sup> <a name="service_principal_id" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyConfig.property.servicePrincipalId"></a>

```python
service_principal_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/service_principal_federation_policy#service_principal_id DataDatabricksServicePrincipalFederationPolicy#service_principal_id}.

---

### DataDatabricksServicePrincipalFederationPolicyOidcPolicy <a name="DataDatabricksServicePrincipalFederationPolicyOidcPolicy" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_service_principal_federation_policy

dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy(
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
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.audiences">audiences</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/service_principal_federation_policy#audiences DataDatabricksServicePrincipalFederationPolicy#audiences}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.issuer">issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/service_principal_federation_policy#issuer DataDatabricksServicePrincipalFederationPolicy#issuer}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.jwksJson">jwks_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/service_principal_federation_policy#jwks_json DataDatabricksServicePrincipalFederationPolicy#jwks_json}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.jwksUri">jwks_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/service_principal_federation_policy#jwks_uri DataDatabricksServicePrincipalFederationPolicy#jwks_uri}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.subject">subject</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/service_principal_federation_policy#subject DataDatabricksServicePrincipalFederationPolicy#subject}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.subjectClaim">subject_claim</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/service_principal_federation_policy#subject_claim DataDatabricksServicePrincipalFederationPolicy#subject_claim}. |

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.audiences"></a>

```python
audiences: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/service_principal_federation_policy#audiences DataDatabricksServicePrincipalFederationPolicy#audiences}.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/service_principal_federation_policy#issuer DataDatabricksServicePrincipalFederationPolicy#issuer}.

---

##### `jwks_json`<sup>Optional</sup> <a name="jwks_json" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.jwksJson"></a>

```python
jwks_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/service_principal_federation_policy#jwks_json DataDatabricksServicePrincipalFederationPolicy#jwks_json}.

---

##### `jwks_uri`<sup>Optional</sup> <a name="jwks_uri" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.jwksUri"></a>

```python
jwks_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/service_principal_federation_policy#jwks_uri DataDatabricksServicePrincipalFederationPolicy#jwks_uri}.

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.subject"></a>

```python
subject: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/service_principal_federation_policy#subject DataDatabricksServicePrincipalFederationPolicy#subject}.

---

##### `subject_claim`<sup>Optional</sup> <a name="subject_claim" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy.property.subjectClaim"></a>

```python
subject_claim: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/service_principal_federation_policy#subject_claim DataDatabricksServicePrincipalFederationPolicy#subject_claim}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference <a name="DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_service_principal_federation_policy

dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetAudiences">reset_audiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetIssuer">reset_issuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetJwksJson">reset_jwks_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetJwksUri">reset_jwks_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetSubject">reset_subject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetSubjectClaim">reset_subject_claim</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_audiences` <a name="reset_audiences" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetAudiences"></a>

```python
def reset_audiences() -> None
```

##### `reset_issuer` <a name="reset_issuer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetIssuer"></a>

```python
def reset_issuer() -> None
```

##### `reset_jwks_json` <a name="reset_jwks_json" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetJwksJson"></a>

```python
def reset_jwks_json() -> None
```

##### `reset_jwks_uri` <a name="reset_jwks_uri" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetJwksUri"></a>

```python
def reset_jwks_uri() -> None
```

##### `reset_subject` <a name="reset_subject" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetSubject"></a>

```python
def reset_subject() -> None
```

##### `reset_subject_claim` <a name="reset_subject_claim" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.resetSubjectClaim"></a>

```python
def reset_subject_claim() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.audiencesInput">audiences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksJsonInput">jwks_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksUriInput">jwks_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectClaimInput">subject_claim_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectInput">subject_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.audiences">audiences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksJson">jwks_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksUri">jwks_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectClaim">subject_claim</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy">DataDatabricksServicePrincipalFederationPolicyOidcPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audiences_input`<sup>Optional</sup> <a name="audiences_input" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.audiencesInput"></a>

```python
audiences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `jwks_json_input`<sup>Optional</sup> <a name="jwks_json_input" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksJsonInput"></a>

```python
jwks_json_input: str
```

- *Type:* str

---

##### `jwks_uri_input`<sup>Optional</sup> <a name="jwks_uri_input" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksUriInput"></a>

```python
jwks_uri_input: str
```

- *Type:* str

---

##### `subject_claim_input`<sup>Optional</sup> <a name="subject_claim_input" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectClaimInput"></a>

```python
subject_claim_input: str
```

- *Type:* str

---

##### `subject_input`<sup>Optional</sup> <a name="subject_input" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectInput"></a>

```python
subject_input: str
```

- *Type:* str

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.audiences"></a>

```python
audiences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `jwks_json`<sup>Required</sup> <a name="jwks_json" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksJson"></a>

```python
jwks_json: str
```

- *Type:* str

---

##### `jwks_uri`<sup>Required</sup> <a name="jwks_uri" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksUri"></a>

```python
jwks_uri: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `subject_claim`<sup>Required</sup> <a name="subject_claim" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectClaim"></a>

```python
subject_claim: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataDatabricksServicePrincipalFederationPolicyOidcPolicy
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServicePrincipalFederationPolicy.DataDatabricksServicePrincipalFederationPolicyOidcPolicy">DataDatabricksServicePrincipalFederationPolicyOidcPolicy</a>

---



