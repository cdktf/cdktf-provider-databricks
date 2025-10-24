# `accountFederationPolicy` Submodule <a name="`accountFederationPolicy` Submodule" id="@cdktf/provider-databricks.accountFederationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountFederationPolicy <a name="AccountFederationPolicy" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_federation_policy databricks_account_federation_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_federation_policy.AccountFederationPolicy;

AccountFederationPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .description(java.lang.String)
//  .oidcPolicy(AccountFederationPolicyOidcPolicy)
//  .policyId(java.lang.String)
//  .servicePrincipalId(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_federation_policy#description AccountFederationPolicy#description}. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.oidcPolicy">oidcPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy">AccountFederationPolicyOidcPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_federation_policy#oidc_policy AccountFederationPolicy#oidc_policy}. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.policyId">policyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_federation_policy#policy_id AccountFederationPolicy#policy_id}. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.servicePrincipalId">servicePrincipalId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_federation_policy#service_principal_id AccountFederationPolicy#service_principal_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_federation_policy#description AccountFederationPolicy#description}.

---

##### `oidcPolicy`<sup>Optional</sup> <a name="oidcPolicy" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.oidcPolicy"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy">AccountFederationPolicyOidcPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_federation_policy#oidc_policy AccountFederationPolicy#oidc_policy}.

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.policyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_federation_policy#policy_id AccountFederationPolicy#policy_id}.

---

##### `servicePrincipalId`<sup>Optional</sup> <a name="servicePrincipalId" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.servicePrincipalId"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_federation_policy#service_principal_id AccountFederationPolicy#service_principal_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.putOidcPolicy">putOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.resetOidcPolicy">resetOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.resetPolicyId">resetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.resetServicePrincipalId">resetServicePrincipalId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOidcPolicy` <a name="putOidcPolicy" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.putOidcPolicy"></a>

```java
public void putOidcPolicy(AccountFederationPolicyOidcPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.putOidcPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy">AccountFederationPolicyOidcPolicy</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetOidcPolicy` <a name="resetOidcPolicy" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.resetOidcPolicy"></a>

```java
public void resetOidcPolicy()
```

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.resetPolicyId"></a>

```java
public void resetPolicyId()
```

##### `resetServicePrincipalId` <a name="resetServicePrincipalId" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.resetServicePrincipalId"></a>

```java
public void resetServicePrincipalId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AccountFederationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_federation_policy.AccountFederationPolicy;

AccountFederationPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_federation_policy.AccountFederationPolicy;

AccountFederationPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_federation_policy.AccountFederationPolicy;

AccountFederationPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_federation_policy.AccountFederationPolicy;

AccountFederationPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AccountFederationPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a AccountFederationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AccountFederationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AccountFederationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_federation_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the AccountFederationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.oidcPolicy">oidcPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference">AccountFederationPolicyOidcPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.oidcPolicyInput">oidcPolicyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy">AccountFederationPolicyOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.policyIdInput">policyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.servicePrincipalIdInput">servicePrincipalIdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.policyId">policyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.servicePrincipalId">servicePrincipalId</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `oidcPolicy`<sup>Required</sup> <a name="oidcPolicy" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.oidcPolicy"></a>

```java
public AccountFederationPolicyOidcPolicyOutputReference getOidcPolicy();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference">AccountFederationPolicyOidcPolicyOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `oidcPolicyInput`<sup>Optional</sup> <a name="oidcPolicyInput" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.oidcPolicyInput"></a>

```java
public IResolvable|AccountFederationPolicyOidcPolicy getOidcPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy">AccountFederationPolicyOidcPolicy</a>

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.policyIdInput"></a>

```java
public java.lang.String getPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `servicePrincipalIdInput`<sup>Optional</sup> <a name="servicePrincipalIdInput" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.servicePrincipalIdInput"></a>

```java
public java.lang.Number getServicePrincipalIdInput();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.servicePrincipalId"></a>

```java
public java.lang.Number getServicePrincipalId();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AccountFederationPolicyConfig <a name="AccountFederationPolicyConfig" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_federation_policy.AccountFederationPolicyConfig;

AccountFederationPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .description(java.lang.String)
//  .oidcPolicy(AccountFederationPolicyOidcPolicy)
//  .policyId(java.lang.String)
//  .servicePrincipalId(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_federation_policy#description AccountFederationPolicy#description}. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.oidcPolicy">oidcPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy">AccountFederationPolicyOidcPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_federation_policy#oidc_policy AccountFederationPolicy#oidc_policy}. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.policyId">policyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_federation_policy#policy_id AccountFederationPolicy#policy_id}. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.servicePrincipalId">servicePrincipalId</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_federation_policy#service_principal_id AccountFederationPolicy#service_principal_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_federation_policy#description AccountFederationPolicy#description}.

---

##### `oidcPolicy`<sup>Optional</sup> <a name="oidcPolicy" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.oidcPolicy"></a>

```java
public AccountFederationPolicyOidcPolicy getOidcPolicy();
```

- *Type:* <a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy">AccountFederationPolicyOidcPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_federation_policy#oidc_policy AccountFederationPolicy#oidc_policy}.

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.policyId"></a>

```java
public java.lang.String getPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_federation_policy#policy_id AccountFederationPolicy#policy_id}.

---

##### `servicePrincipalId`<sup>Optional</sup> <a name="servicePrincipalId" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.servicePrincipalId"></a>

```java
public java.lang.Number getServicePrincipalId();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_federation_policy#service_principal_id AccountFederationPolicy#service_principal_id}.

---

### AccountFederationPolicyOidcPolicy <a name="AccountFederationPolicyOidcPolicy" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_federation_policy.AccountFederationPolicyOidcPolicy;

AccountFederationPolicyOidcPolicy.builder()
//  .audiences(java.util.List<java.lang.String>)
//  .issuer(java.lang.String)
//  .jwksJson(java.lang.String)
//  .jwksUri(java.lang.String)
//  .subject(java.lang.String)
//  .subjectClaim(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.audiences">audiences</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_federation_policy#audiences AccountFederationPolicy#audiences}. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.issuer">issuer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_federation_policy#issuer AccountFederationPolicy#issuer}. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.jwksJson">jwksJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_federation_policy#jwks_json AccountFederationPolicy#jwks_json}. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.jwksUri">jwksUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_federation_policy#jwks_uri AccountFederationPolicy#jwks_uri}. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.subject">subject</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_federation_policy#subject AccountFederationPolicy#subject}. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.subjectClaim">subjectClaim</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_federation_policy#subject_claim AccountFederationPolicy#subject_claim}. |

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.audiences"></a>

```java
public java.util.List<java.lang.String> getAudiences();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_federation_policy#audiences AccountFederationPolicy#audiences}.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_federation_policy#issuer AccountFederationPolicy#issuer}.

---

##### `jwksJson`<sup>Optional</sup> <a name="jwksJson" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.jwksJson"></a>

```java
public java.lang.String getJwksJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_federation_policy#jwks_json AccountFederationPolicy#jwks_json}.

---

##### `jwksUri`<sup>Optional</sup> <a name="jwksUri" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.jwksUri"></a>

```java
public java.lang.String getJwksUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_federation_policy#jwks_uri AccountFederationPolicy#jwks_uri}.

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_federation_policy#subject AccountFederationPolicy#subject}.

---

##### `subjectClaim`<sup>Optional</sup> <a name="subjectClaim" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.subjectClaim"></a>

```java
public java.lang.String getSubjectClaim();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/account_federation_policy#subject_claim AccountFederationPolicy#subject_claim}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccountFederationPolicyOidcPolicyOutputReference <a name="AccountFederationPolicyOidcPolicyOutputReference" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.databricks.account_federation_policy.AccountFederationPolicyOidcPolicyOutputReference;

new AccountFederationPolicyOidcPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetAudiences">resetAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetJwksJson">resetJwksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetJwksUri">resetJwksUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetSubject">resetSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetSubjectClaim">resetSubjectClaim</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudiences` <a name="resetAudiences" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetAudiences"></a>

```java
public void resetAudiences()
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetIssuer"></a>

```java
public void resetIssuer()
```

##### `resetJwksJson` <a name="resetJwksJson" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetJwksJson"></a>

```java
public void resetJwksJson()
```

##### `resetJwksUri` <a name="resetJwksUri" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetJwksUri"></a>

```java
public void resetJwksUri()
```

##### `resetSubject` <a name="resetSubject" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetSubject"></a>

```java
public void resetSubject()
```

##### `resetSubjectClaim` <a name="resetSubjectClaim" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetSubjectClaim"></a>

```java
public void resetSubjectClaim()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.audiencesInput">audiencesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.jwksJsonInput">jwksJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.jwksUriInput">jwksUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.subjectClaimInput">subjectClaimInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.subjectInput">subjectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.audiences">audiences</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.jwksJson">jwksJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.jwksUri">jwksUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.subject">subject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.subjectClaim">subjectClaim</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy">AccountFederationPolicyOidcPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `audiencesInput`<sup>Optional</sup> <a name="audiencesInput" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.audiencesInput"></a>

```java
public java.util.List<java.lang.String> getAudiencesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `jwksJsonInput`<sup>Optional</sup> <a name="jwksJsonInput" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.jwksJsonInput"></a>

```java
public java.lang.String getJwksJsonInput();
```

- *Type:* java.lang.String

---

##### `jwksUriInput`<sup>Optional</sup> <a name="jwksUriInput" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.jwksUriInput"></a>

```java
public java.lang.String getJwksUriInput();
```

- *Type:* java.lang.String

---

##### `subjectClaimInput`<sup>Optional</sup> <a name="subjectClaimInput" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.subjectClaimInput"></a>

```java
public java.lang.String getSubjectClaimInput();
```

- *Type:* java.lang.String

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.subjectInput"></a>

```java
public java.lang.String getSubjectInput();
```

- *Type:* java.lang.String

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.audiences"></a>

```java
public java.util.List<java.lang.String> getAudiences();
```

- *Type:* java.util.List<java.lang.String>

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `jwksJson`<sup>Required</sup> <a name="jwksJson" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.jwksJson"></a>

```java
public java.lang.String getJwksJson();
```

- *Type:* java.lang.String

---

##### `jwksUri`<sup>Required</sup> <a name="jwksUri" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.jwksUri"></a>

```java
public java.lang.String getJwksUri();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.subject"></a>

```java
public java.lang.String getSubject();
```

- *Type:* java.lang.String

---

##### `subjectClaim`<sup>Required</sup> <a name="subjectClaim" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.subjectClaim"></a>

```java
public java.lang.String getSubjectClaim();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|AccountFederationPolicyOidcPolicy getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy">AccountFederationPolicyOidcPolicy</a>

---



