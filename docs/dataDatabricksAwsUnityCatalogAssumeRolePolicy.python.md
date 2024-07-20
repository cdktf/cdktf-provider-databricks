# `dataDatabricksAwsUnityCatalogAssumeRolePolicy` Submodule <a name="`dataDatabricksAwsUnityCatalogAssumeRolePolicy` Submodule" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAwsUnityCatalogAssumeRolePolicy <a name="DataDatabricksAwsUnityCatalogAssumeRolePolicy" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/data-sources/aws_unity_catalog_assume_role_policy databricks_aws_unity_catalog_assume_role_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_aws_unity_catalog_assume_role_policy

dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aws_account_id: str,
  external_id: str,
  role_name: str,
  unity_catalog_iam_arn: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/data-sources/aws_unity_catalog_assume_role_policy#aws_account_id DataDatabricksAwsUnityCatalogAssumeRolePolicy#aws_account_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/data-sources/aws_unity_catalog_assume_role_policy#external_id DataDatabricksAwsUnityCatalogAssumeRolePolicy#external_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.roleName">role_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/data-sources/aws_unity_catalog_assume_role_policy#role_name DataDatabricksAwsUnityCatalogAssumeRolePolicy#role_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.unityCatalogIamArn">unity_catalog_iam_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/data-sources/aws_unity_catalog_assume_role_policy#unity_catalog_iam_arn DataDatabricksAwsUnityCatalogAssumeRolePolicy#unity_catalog_iam_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.awsAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/data-sources/aws_unity_catalog_assume_role_policy#aws_account_id DataDatabricksAwsUnityCatalogAssumeRolePolicy#aws_account_id}.

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.externalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/data-sources/aws_unity_catalog_assume_role_policy#external_id DataDatabricksAwsUnityCatalogAssumeRolePolicy#external_id}.

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.roleName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/data-sources/aws_unity_catalog_assume_role_policy#role_name DataDatabricksAwsUnityCatalogAssumeRolePolicy#role_name}.

---

##### `unity_catalog_iam_arn`<sup>Optional</sup> <a name="unity_catalog_iam_arn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.Initializer.parameter.unityCatalogIamArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/data-sources/aws_unity_catalog_assume_role_policy#unity_catalog_iam_arn DataDatabricksAwsUnityCatalogAssumeRolePolicy#unity_catalog_iam_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.resetUnityCatalogIamArn">reset_unity_catalog_iam_arn</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_unity_catalog_iam_arn` <a name="reset_unity_catalog_iam_arn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.resetUnityCatalogIamArn"></a>

```python
def reset_unity_catalog_iam_arn() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataDatabricksAwsUnityCatalogAssumeRolePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_aws_unity_catalog_assume_role_policy

dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_aws_unity_catalog_assume_role_policy

dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_aws_unity_catalog_assume_role_policy

dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_aws_unity_catalog_assume_role_policy

dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataDatabricksAwsUnityCatalogAssumeRolePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataDatabricksAwsUnityCatalogAssumeRolePolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataDatabricksAwsUnityCatalogAssumeRolePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/data-sources/aws_unity_catalog_assume_role_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAwsUnityCatalogAssumeRolePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.json">json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.awsAccountIdInput">aws_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.roleNameInput">role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.unityCatalogIamArnInput">unity_catalog_iam_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.roleName">role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.unityCatalogIamArn">unity_catalog_iam_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.json"></a>

```python
json: str
```

- *Type:* str

---

##### `aws_account_id_input`<sup>Optional</sup> <a name="aws_account_id_input" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.awsAccountIdInput"></a>

```python
aws_account_id_input: str
```

- *Type:* str

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `role_name_input`<sup>Optional</sup> <a name="role_name_input" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.roleNameInput"></a>

```python
role_name_input: str
```

- *Type:* str

---

##### `unity_catalog_iam_arn_input`<sup>Optional</sup> <a name="unity_catalog_iam_arn_input" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.unityCatalogIamArnInput"></a>

```python
unity_catalog_iam_arn_input: str
```

- *Type:* str

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

---

##### `unity_catalog_iam_arn`<sup>Required</sup> <a name="unity_catalog_iam_arn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.unityCatalogIamArn"></a>

```python
unity_catalog_iam_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig <a name="DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import data_databricks_aws_unity_catalog_assume_role_policy

dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aws_account_id: str,
  external_id: str,
  role_name: str,
  unity_catalog_iam_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/data-sources/aws_unity_catalog_assume_role_policy#aws_account_id DataDatabricksAwsUnityCatalogAssumeRolePolicy#aws_account_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/data-sources/aws_unity_catalog_assume_role_policy#external_id DataDatabricksAwsUnityCatalogAssumeRolePolicy#external_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.roleName">role_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/data-sources/aws_unity_catalog_assume_role_policy#role_name DataDatabricksAwsUnityCatalogAssumeRolePolicy#role_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.unityCatalogIamArn">unity_catalog_iam_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/data-sources/aws_unity_catalog_assume_role_policy#unity_catalog_iam_arn DataDatabricksAwsUnityCatalogAssumeRolePolicy#unity_catalog_iam_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/data-sources/aws_unity_catalog_assume_role_policy#aws_account_id DataDatabricksAwsUnityCatalogAssumeRolePolicy#aws_account_id}.

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/data-sources/aws_unity_catalog_assume_role_policy#external_id DataDatabricksAwsUnityCatalogAssumeRolePolicy#external_id}.

---

##### `role_name`<sup>Required</sup> <a name="role_name" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.roleName"></a>

```python
role_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/data-sources/aws_unity_catalog_assume_role_policy#role_name DataDatabricksAwsUnityCatalogAssumeRolePolicy#role_name}.

---

##### `unity_catalog_iam_arn`<sup>Optional</sup> <a name="unity_catalog_iam_arn" id="@cdktf/provider-databricks.dataDatabricksAwsUnityCatalogAssumeRolePolicy.DataDatabricksAwsUnityCatalogAssumeRolePolicyConfig.property.unityCatalogIamArn"></a>

```python
unity_catalog_iam_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.49.0/docs/data-sources/aws_unity_catalog_assume_role_policy#unity_catalog_iam_arn DataDatabricksAwsUnityCatalogAssumeRolePolicy#unity_catalog_iam_arn}.

---



