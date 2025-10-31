# `servicePrincipalFederationPolicy` Submodule <a name="`servicePrincipalFederationPolicy` Submodule" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicePrincipalFederationPolicy <a name="ServicePrincipalFederationPolicy" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy databricks_service_principal_federation_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import service_principal_federation_policy

servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str = None,
  oidc_policy: ServicePrincipalFederationPolicyOidcPolicy = None,
  policy_id: str = None,
  service_principal_id: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#description ServicePrincipalFederationPolicy#description}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.oidcPolicy">oidc_policy</a></code> | <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy">ServicePrincipalFederationPolicyOidcPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#oidc_policy ServicePrincipalFederationPolicy#oidc_policy}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.policyId">policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#policy_id ServicePrincipalFederationPolicy#policy_id}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.servicePrincipalId">service_principal_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#service_principal_id ServicePrincipalFederationPolicy#service_principal_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#description ServicePrincipalFederationPolicy#description}.

---

##### `oidc_policy`<sup>Optional</sup> <a name="oidc_policy" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.oidcPolicy"></a>

- *Type:* <a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy">ServicePrincipalFederationPolicyOidcPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#oidc_policy ServicePrincipalFederationPolicy#oidc_policy}.

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.policyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#policy_id ServicePrincipalFederationPolicy#policy_id}.

---

##### `service_principal_id`<sup>Optional</sup> <a name="service_principal_id" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.Initializer.parameter.servicePrincipalId"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#service_principal_id ServicePrincipalFederationPolicy#service_principal_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.putOidcPolicy">put_oidc_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.resetOidcPolicy">reset_oidc_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.resetPolicyId">reset_policy_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.resetServicePrincipalId">reset_service_principal_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_oidc_policy` <a name="put_oidc_policy" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.putOidcPolicy"></a>

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

###### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.putOidcPolicy.parameter.audiences"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#audiences ServicePrincipalFederationPolicy#audiences}.

---

###### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.putOidcPolicy.parameter.issuer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#issuer ServicePrincipalFederationPolicy#issuer}.

---

###### `jwks_json`<sup>Optional</sup> <a name="jwks_json" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.putOidcPolicy.parameter.jwksJson"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#jwks_json ServicePrincipalFederationPolicy#jwks_json}.

---

###### `jwks_uri`<sup>Optional</sup> <a name="jwks_uri" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.putOidcPolicy.parameter.jwksUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#jwks_uri ServicePrincipalFederationPolicy#jwks_uri}.

---

###### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.putOidcPolicy.parameter.subject"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#subject ServicePrincipalFederationPolicy#subject}.

---

###### `subject_claim`<sup>Optional</sup> <a name="subject_claim" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.putOidcPolicy.parameter.subjectClaim"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#subject_claim ServicePrincipalFederationPolicy#subject_claim}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_oidc_policy` <a name="reset_oidc_policy" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.resetOidcPolicy"></a>

```python
def reset_oidc_policy() -> None
```

##### `reset_policy_id` <a name="reset_policy_id" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.resetPolicyId"></a>

```python
def reset_policy_id() -> None
```

##### `reset_service_principal_id` <a name="reset_service_principal_id" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.resetServicePrincipalId"></a>

```python
def reset_service_principal_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ServicePrincipalFederationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import service_principal_federation_policy

servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import service_principal_federation_policy

servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_databricks import service_principal_federation_policy

servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import service_principal_federation_policy

servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ServicePrincipalFederationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServicePrincipalFederationPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServicePrincipalFederationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServicePrincipalFederationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.oidcPolicy">oidc_policy</a></code> | <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference">ServicePrincipalFederationPolicyOidcPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.oidcPolicyInput">oidc_policy_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy">ServicePrincipalFederationPolicyOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.policyIdInput">policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.servicePrincipalIdInput">service_principal_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.servicePrincipalId">service_principal_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `oidc_policy`<sup>Required</sup> <a name="oidc_policy" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.oidcPolicy"></a>

```python
oidc_policy: ServicePrincipalFederationPolicyOidcPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference">ServicePrincipalFederationPolicyOidcPolicyOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `oidc_policy_input`<sup>Optional</sup> <a name="oidc_policy_input" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.oidcPolicyInput"></a>

```python
oidc_policy_input: IResolvable | ServicePrincipalFederationPolicyOidcPolicy
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy">ServicePrincipalFederationPolicyOidcPolicy</a>

---

##### `policy_id_input`<sup>Optional</sup> <a name="policy_id_input" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.policyIdInput"></a>

```python
policy_id_input: str
```

- *Type:* str

---

##### `service_principal_id_input`<sup>Optional</sup> <a name="service_principal_id_input" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.servicePrincipalIdInput"></a>

```python
service_principal_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `service_principal_id`<sup>Required</sup> <a name="service_principal_id" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.servicePrincipalId"></a>

```python
service_principal_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServicePrincipalFederationPolicyConfig <a name="ServicePrincipalFederationPolicyConfig" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import service_principal_federation_policy

servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  description: str = None,
  oidc_policy: ServicePrincipalFederationPolicyOidcPolicy = None,
  policy_id: str = None,
  service_principal_id: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#description ServicePrincipalFederationPolicy#description}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.oidcPolicy">oidc_policy</a></code> | <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy">ServicePrincipalFederationPolicyOidcPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#oidc_policy ServicePrincipalFederationPolicy#oidc_policy}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.policyId">policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#policy_id ServicePrincipalFederationPolicy#policy_id}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.servicePrincipalId">service_principal_id</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#service_principal_id ServicePrincipalFederationPolicy#service_principal_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#description ServicePrincipalFederationPolicy#description}.

---

##### `oidc_policy`<sup>Optional</sup> <a name="oidc_policy" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.oidcPolicy"></a>

```python
oidc_policy: ServicePrincipalFederationPolicyOidcPolicy
```

- *Type:* <a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy">ServicePrincipalFederationPolicyOidcPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#oidc_policy ServicePrincipalFederationPolicy#oidc_policy}.

---

##### `policy_id`<sup>Optional</sup> <a name="policy_id" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#policy_id ServicePrincipalFederationPolicy#policy_id}.

---

##### `service_principal_id`<sup>Optional</sup> <a name="service_principal_id" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyConfig.property.servicePrincipalId"></a>

```python
service_principal_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#service_principal_id ServicePrincipalFederationPolicy#service_principal_id}.

---

### ServicePrincipalFederationPolicyOidcPolicy <a name="ServicePrincipalFederationPolicyOidcPolicy" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import service_principal_federation_policy

servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy(
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
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.audiences">audiences</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#audiences ServicePrincipalFederationPolicy#audiences}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.issuer">issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#issuer ServicePrincipalFederationPolicy#issuer}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.jwksJson">jwks_json</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#jwks_json ServicePrincipalFederationPolicy#jwks_json}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.jwksUri">jwks_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#jwks_uri ServicePrincipalFederationPolicy#jwks_uri}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.subject">subject</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#subject ServicePrincipalFederationPolicy#subject}. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.subjectClaim">subject_claim</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#subject_claim ServicePrincipalFederationPolicy#subject_claim}. |

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.audiences"></a>

```python
audiences: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#audiences ServicePrincipalFederationPolicy#audiences}.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#issuer ServicePrincipalFederationPolicy#issuer}.

---

##### `jwks_json`<sup>Optional</sup> <a name="jwks_json" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.jwksJson"></a>

```python
jwks_json: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#jwks_json ServicePrincipalFederationPolicy#jwks_json}.

---

##### `jwks_uri`<sup>Optional</sup> <a name="jwks_uri" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.jwksUri"></a>

```python
jwks_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#jwks_uri ServicePrincipalFederationPolicy#jwks_uri}.

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.subject"></a>

```python
subject: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#subject ServicePrincipalFederationPolicy#subject}.

---

##### `subject_claim`<sup>Optional</sup> <a name="subject_claim" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy.property.subjectClaim"></a>

```python
subject_claim: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.96.0/docs/resources/service_principal_federation_policy#subject_claim ServicePrincipalFederationPolicy#subject_claim}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicePrincipalFederationPolicyOidcPolicyOutputReference <a name="ServicePrincipalFederationPolicyOidcPolicyOutputReference" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import service_principal_federation_policy

servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetAudiences">reset_audiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetIssuer">reset_issuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetJwksJson">reset_jwks_json</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetJwksUri">reset_jwks_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetSubject">reset_subject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetSubjectClaim">reset_subject_claim</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_audiences` <a name="reset_audiences" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetAudiences"></a>

```python
def reset_audiences() -> None
```

##### `reset_issuer` <a name="reset_issuer" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetIssuer"></a>

```python
def reset_issuer() -> None
```

##### `reset_jwks_json` <a name="reset_jwks_json" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetJwksJson"></a>

```python
def reset_jwks_json() -> None
```

##### `reset_jwks_uri` <a name="reset_jwks_uri" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetJwksUri"></a>

```python
def reset_jwks_uri() -> None
```

##### `reset_subject` <a name="reset_subject" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetSubject"></a>

```python
def reset_subject() -> None
```

##### `reset_subject_claim` <a name="reset_subject_claim" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.resetSubjectClaim"></a>

```python
def reset_subject_claim() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.audiencesInput">audiences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksJsonInput">jwks_json_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksUriInput">jwks_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectClaimInput">subject_claim_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectInput">subject_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.audiences">audiences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksJson">jwks_json</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksUri">jwks_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectClaim">subject_claim</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy">ServicePrincipalFederationPolicyOidcPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audiences_input`<sup>Optional</sup> <a name="audiences_input" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.audiencesInput"></a>

```python
audiences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `jwks_json_input`<sup>Optional</sup> <a name="jwks_json_input" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksJsonInput"></a>

```python
jwks_json_input: str
```

- *Type:* str

---

##### `jwks_uri_input`<sup>Optional</sup> <a name="jwks_uri_input" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksUriInput"></a>

```python
jwks_uri_input: str
```

- *Type:* str

---

##### `subject_claim_input`<sup>Optional</sup> <a name="subject_claim_input" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectClaimInput"></a>

```python
subject_claim_input: str
```

- *Type:* str

---

##### `subject_input`<sup>Optional</sup> <a name="subject_input" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectInput"></a>

```python
subject_input: str
```

- *Type:* str

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.audiences"></a>

```python
audiences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `jwks_json`<sup>Required</sup> <a name="jwks_json" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksJson"></a>

```python
jwks_json: str
```

- *Type:* str

---

##### `jwks_uri`<sup>Required</sup> <a name="jwks_uri" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.jwksUri"></a>

```python
jwks_uri: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `subject_claim`<sup>Required</sup> <a name="subject_claim" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.subjectClaim"></a>

```python
subject_claim: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicyOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ServicePrincipalFederationPolicyOidcPolicy
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-databricks.servicePrincipalFederationPolicy.ServicePrincipalFederationPolicyOidcPolicy">ServicePrincipalFederationPolicyOidcPolicy</a>

---



